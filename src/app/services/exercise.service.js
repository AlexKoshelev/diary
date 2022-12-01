import httpService from "./http.service";
const exerciseEndpoin = "exercise/";

const exerciseService = {
  /*   update: async (id, content) => {
    const { data } = await httpService.put(exerciseEndpoin + id, content);
    return data;
  },
  get: async (id) => {
    const { data } = await httpService.get(exerciseEndpoin + id);
    return data;
  }, */
  fetchAll: async () => {
    const { data } = await httpService.get(exerciseEndpoin);
    console.log(data);

    return data;
  },
};
export default exerciseService;
