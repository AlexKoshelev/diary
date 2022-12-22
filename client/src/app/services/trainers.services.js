import httpService from "./http.service";
import localStorageService from "./localStorage.service";
const trainersEndpoin = "trainers/";

const trainersService = {
  fetchAll: async () => {
    const { data } = await httpService.get(trainersEndpoin);

    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      trainersEndpoin + payload._id,
      payload
    );
    return data;
  },
  getCurrentTrainer: async () => {
    const { data } = await httpService.get(
      trainersEndpoin + localStorageService.getTrainerId()
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      trainersEndpoin + localStorageService.getTrainerId(),
      payload
    );

    return data;
  },
};
export default trainersService;
