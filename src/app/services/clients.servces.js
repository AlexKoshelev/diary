import httpService from "./http.service";
import localStorageService from "./localStorage.service";
const clientsEndpoin = "clients/";

const clientsService = {
  fetchAll: async () => {
    const { data } = await httpService.get(clientsEndpoin);

    return data;
  },
  createClient: async (payload) => {
    console.log(payload);

    const { data } = await httpService.put(
      clientsEndpoin + payload._id,
      payload
    );
    console.log(data);

    return data;
  },
  getCurrentTrainer: async () => {
    const { data } = await httpService.get(
      clientsEndpoin + localStorageService.getTrainerId()
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      clientsEndpoin + localStorageService.getTrainerId(),
      payload
    );
    return data;
  },
  removeClient: async (clientId) => {
    const { data } = await httpService.delete(clientsEndpoin + clientId);
    return data;
  },
};
export default clientsService;
