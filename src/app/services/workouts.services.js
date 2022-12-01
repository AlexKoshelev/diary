import httpService from "./http.service";
const workoutsEndpoin = "workouts/";

const workoutsService = {
  /*   update: async (id, content) => {
    const { data } = await httpService.put(workoutsEndpoin + id, content);
    return data;
  },
  get: async (id) => {
    const { data } = await httpService.get(workoutsEndpoin + id);
    return data;
  }, */
  fetchAll: async () => {
    const { data } = await httpService.get(workoutsEndpoin);

    return data;
  },
};
export default workoutsService;
