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
    clientsCreated: (state, action) => {
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
  clientsCreated,
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
export const createClients = (client) => async (dispatch) => {
  console.log(client);

  try {
    const { content } = await clientsService.createClient(client);
    console.log(content);

    dispatch(clientsCreated(client));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const removeClient = (_id) => async (dispatch) => {
  console.log(_id);
  try {
    const { content } = await clientsService.removeClient(_id);
    if (content === null) {
      dispatch(clientsRemoved(_id));
    }
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const getCurrentClientData = () => (state) => {
  return state.clients.entities
    ? state.clients.find((с) => с._id === state.users.auth.userId)
    : null;
};
export const getClients = () => (state) => state.clients.entities;

export const getClientsLoadingStatus = () => (state) => state.clients.isLoading;
export const getClientsById = (id) => (state) => {
  if (state.clients.entities && state.clients.entities !== undefined) {
    return state.clients.entities.filter((client) => client.trainerId === id);
  }
};
export default clientsReducer;
