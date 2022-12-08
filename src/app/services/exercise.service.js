import httpService from "./http.service";
const exerciseEndpoin = "exercise/";

const exerciseService = {
  fetchAll: async () => {
    const { data } = await httpService.get(exerciseEndpoin);
    return data;
  },
  createExercise: async (payload) => {
    const { data } = await httpService.put(
      exerciseEndpoin + payload.id,
      payload
    );
    return data;
  },
  removeExercise: async (exerciseId) => {
    const { data } = await httpService.delete(exerciseEndpoin + exerciseId);
    return data;
  },
};
export default exerciseService;
