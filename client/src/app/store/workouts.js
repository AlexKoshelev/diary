import { createSlice } from "@reduxjs/toolkit";
import workoutsService from "../services/workouts.services";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    workoutsRequested: (state) => {
      state.isLoading = true;
    },
    workoutsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    workoutsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    workoutsCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    workoutsRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (workouts) => workouts._id !== action.payload
      );
    },
    WorkoutUpdeted: (state, action) => {
      const elementIndex = state.entities.findIndex(
        (t) => t._id === action.payload._id
      );
      state.entities[elementIndex] = action.payload;
    },
  },
});

const { reducer: workoutsReducer, actions } = workoutsSlice;

const {
  workoutsRequested,
  workoutsReceved,
  workoutsRequestFiled,
  workoutsCreated,
  workoutsRemoved,
  WorkoutUpdeted,
} = actions;

export const updateWorkout = (id, data) => async (dispatch) => {
  console.log(id);
  console.log(data);

  try {
    const content = await workoutsService.update(id, data);

    dispatch(WorkoutUpdeted(content));
  } catch (error) {
    dispatch(workoutsRequestFiled(error.message));
  }
};
export const loadworkoutsList = () => async (dispatch) => {
  dispatch(workoutsRequested());
  try {
    const content = await workoutsService.fetchAll();
    console.log(content);

    dispatch(workoutsReceved(content));
  } catch (error) {
    dispatch(workoutsRequestFiled(error.message));
  }
};
export const createWorkouts = (workout) => async (dispatch) => {
  console.log(workout);

  try {
    const content = await workoutsService.createWorkouts(workout);
    console.log(content);

    dispatch(workoutsCreated(workout));
  } catch (error) {
    dispatch(workoutsRequestFiled(error.message));
  }
};
export const removeWorkout = (_id) => async (dispatch) => {
  console.log(_id);
  try {
    const content = await workoutsService.removeWorkout(_id);
    if (content === null) {
      dispatch(workoutsRemoved(_id));
    }
  } catch (error) {
    dispatch(workoutsRequestFiled(error.message));
  }
};
export const getCurrentWorkoutData = () => (state) => {
  return state.workouts.entities
    ? state.workouts.find((с) => с._id === state.users.auth.userId)
    : null;
};
export const getworkouts = () => (state) => state.workouts.entities;

export const getWorkoutsLoadingStatus = () => (state) =>
  state.workouts.isLoading;
export const getWorkoutsById = (id) => (state) => {
  if (state.workouts.entities && state.workouts.entities !== undefined) {
    return state.workouts.entities.filter((workout) => workout.clientId === id);
  }
};
export const getCurrentWorkoutsById = (id) => (state) => {
  if (state.workouts.entities && state.workouts.entities !== undefined) {
    return state.workouts.entities.find((workout) => workout._id === id);
  }
};
export default workoutsReducer;
