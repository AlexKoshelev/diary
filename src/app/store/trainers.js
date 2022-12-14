import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import trainersService from "../services/trainers.services";
import { generateAuthError } from "../utils/generateAuthError";

//createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      errors: null,
      auth: { trainerId: localStorageService.getTrainerId() },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      errors: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
    };

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    trainersRequested: (state) => {
      state.isLoading = true;
    },
    trainersReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    trainersRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    trainersCreate(state, action) {
      state.entities.push(action.payload);
    },
    trainersRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (trainer) => trainer._id !== action.payload
      );
    },
    authRequestSucces: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.errors = action.payload;
    },
    trainerCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    trainerLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    authRequested: (state) => {
      state.errors = null;
    },
  },
});

const { reducer: trainersReducer, actions } = trainersSlice;

const {
  trainersRequested,
  trainersReceved,
  trainersRequestFiled,
  trainersCreate,

  authRequestFailed,
  authRequestSucces,
  trainerCreated,
  trainerLoggedOut,
} = actions;

const authRequested = createAction("trainers/authRequested");
const trainerCreateRequested = createAction("trainers/trainerCreateRequested");
const createTrainerFailed = createAction("trainers/createTrainerFailed");
export const logIn =
  ({ payload }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      dispatch(authRequestSucces({ trainerId: data.localId }));
      localStorageService.setTokens(data);
      console.log("вы вошли");
    } catch (error) {
      const message = error.response.data.error.message;
      const code = error.response.data.error.code;
      console.log(message);

      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };
function createTrainer(payload) {
  return async function (dispatch) {
    dispatch(trainerCreateRequested());
    try {
      const { content } = await trainersService.create(payload);
      dispatch(trainerCreated(content));
    } catch (error) {
      dispatch(createTrainerFailed(error.message));
    }
  };
}
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(trainerLoggedOut());
};

export const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSucces({ trainerId: data.localId }));
      dispatch(
        createTrainer({
          _id: data.localId,
          email,
          ...rest,
        })
      );
      console.log("вы зарегались");
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };
/*  ----------------------------------------------------------------  */
export const loadTrainersList = () => async (dispatch) => {
  dispatch(trainersRequested());
  try {
    const content = await trainersService.fetchAll();

    dispatch(trainersReceved(content));
  } catch (error) {
    dispatch(trainersRequestFiled(error.message));
  }
};
export const createTrainers = (trainers) => async (dispatch) => {
  try {
    const { content } = await trainersService.createExercise(trainers);
    dispatch(trainersCreate(content));
  } catch (error) {
    dispatch(trainersRequestFiled(error.message));
  }
};
export const getCurrentTrainerData = () => (state) => {
  return state.trainers.entities
    ? state.trainers.entities.find(
        (u) => u._id === state.trainers.auth.trainerId
      )
    : null;
};

export const getTrainers = () => (state) => state.trainers.entities;
export const getTrainersLoadingStatus = () => (state) =>
  state.trainers.isLoading;
export const getAuthErrors = () => (state) => state.trainers.errors;
export const getCurrentTrainerId = () => (state) =>
  state.trainers.auth.trainerId;
export const getIsLoggedIn = () => (state) => state.trainers.isLoggedIn;
export default trainersReducer;
