import httpService from "./http.service";
import localStorageService from "./localStorage.service";
const workoutsEndpoin = "workouts/";

const workoutsService = {
  fetchAll: async () => {
    const { data } = await httpService.get(workoutsEndpoin);

    return data;
  },
  createWorkouts: async (payload) => {
    const { data } = await httpService.post(workoutsEndpoin, payload);

    return data;
  },
  getCurrentWorkout: async () => {
    const { data } = await httpService.get(
      workoutsEndpoin + localStorageService.getTrainerId()
    );
    return data;
  },
  update: async (id, payload) => {
    const { data } = await httpService.patch(workoutsEndpoin + id, payload);
    return data;
  },
  removeWorkout: async (clientId) => {
    const { data } = await httpService.delete(workoutsEndpoin + clientId);
    return data;
  },
};
export default workoutsService;
