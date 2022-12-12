import { createSlice } from "@reduxjs/toolkit";
import exerciseService from "../services/exercise.service";

//createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
const exersicesSlice = createSlice({
  name: "exersices",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    exersicesRequested: (state) => {
      state.isLoading = true;
    },
    exersicesReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    exersicesRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    exersiceCreate(state, action) {
      state.entities.push(action.payload);
    },
    exersiceRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (exercise) => exercise._id !== action.payload
      );
    },
  },
});

const { reducer: exersicesReducer, actions } = exersicesSlice;

const {
  exersicesRequested,
  exersicesReceved,
  exersicesRequestFiled,
  exersiceCreate,
  exersiceRemoved,
} = actions;

export const loadExersicesList = () => async (dispatch) => {
  dispatch(exersicesRequested());
  try {
    const content = await exerciseService.fetchAll();
    console.log(content);

    dispatch(exersicesReceved(content));
  } catch (error) {
    dispatch(exersicesRequestFiled(error.message));
  }
};
export const createExersices = (exercise) => async (dispatch) => {
  try {
    const { content } = await exerciseService.createExercise(exercise);
    dispatch(exersiceCreate(content));
  } catch (error) {
    dispatch(exersicesRequestFiled(error.message));
  }
};
export const removeExercise = (id) => async (dispatch) => {
  console.log(id);

  try {
    const { content } = await exerciseService.removeExercise(id);
    if (content === null) {
      dispatch(exersiceRemoved(id));
    }
  } catch (error) {
    dispatch(exersicesRequestFiled(error.message));
  }
};

export const getExersices = () => (state) => state.exercises.entities;
export const getExersicesLoadingStatus = () => (state) =>
  state.exercises.isLoading;

export default exersicesReducer;
