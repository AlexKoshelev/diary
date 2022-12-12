import { createSlice } from "@reduxjs/toolkit";
import clientsService from "../services/clients.servces";

//createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    clientsRequested: (state) => {
      state.isLoading = true;
    },
    clientsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    clientsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clientsCreate(state, action) {
      state.entities.push(action.payload);
    },
    clientsRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (clients) => clients._id !== action.payload
      );
    },
  },
});

const { reducer: clientsReducer, actions } = clientsSlice;

const {
  clientsRequested,
  clientsReceved,
  clientsRequestFiled,
  clientsCreate,
  clientsRemoved,
} = actions;

export const loadClientsList = () => async (dispatch) => {
  dispatch(clientsRequested());
  try {
    const content = await clientsService.fetchAll();

    dispatch(clientsReceved(content));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const createclients = (clients) => async (dispatch) => {
  try {
    const { content } = await clientsService.createclients(clients);
    dispatch(clientsCreate(content));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const removeComment = (_id) => async (dispatch) => {
  console.log(_id);

  try {
    const { content } = await clientsService.removeComment(_id);
    if (content === null) {
      dispatch(clientsRemoved(_id));
    }
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const getCurrentUserData = () => (state) => {
  return  state.clients.entities
      ?  state.clients.entities.find((с) => с._id === state.users.auth.userId)
      : null;
};
export const getclients = () => (state) => state.clients.entities;
export const getclientsLoadingStatus = () => (state) => state.clients.isLoading;
export const getClientsById = (id) => (state) =>
  state.clients.entities.content.filter((client) => client.trainer_id === id);

export default clientsReducer;
