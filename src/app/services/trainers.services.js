import httpService from "./http.service";
import localStorageService from "./localStorage.service";
const trainersEndpoin = "trainers/";

const trainersService = {
  get: async () => {
    const { data } = await httpService.get(trainersEndpoin);
    console.log(data);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      trainersEndpoin + payload._id,
      payload
    );
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      trainersEndpoin + localStorageService.getUserId()
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      trainersEndpoin + localStorageService.getUserId(),
      payload
    );

    return data;
  },
};
export default trainersService;
