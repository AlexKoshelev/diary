import httpService from "./http.service";

const clientsEndpoin = "clients/";

const clientsService = {
  fetchAll: async () => {
    const { data } = await httpService.get(clientsEndpoin);

    return data;
  },
  createClient: async (payload) => {
    console.log(payload);

    const { data } = await httpService.post(clientsEndpoin, payload);
    console.log(data);
    return data;
  },

  update: async (id, payload) => {
    const { data } = await httpService.patch(clientsEndpoin + id, payload);
    return data;
  },
  removeClient: async (clientId) => {
    const { data } = await httpService.delete(clientsEndpoin + clientId);
    return data;
  },
};
export default clientsService;
