import httpService from "./http.service";
import localStorageService from "./localStorage.service";
const clientsEndpoin = "clients/";

const clientsService = {
  get: async () => {
    const { data } = await httpService.get(clientsEndpoin);

    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      clientsEndpoin + payload._id,
      payload
    );
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      clientsEndpoin + localStorageService.getUserId()
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      clientsEndpoin + localStorageService.getUserId(),
      payload
    );

    return data;
  },
};
export default clientsService;
