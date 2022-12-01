import httpService from "./http.service";
const notesEndpoin = "notes/";

const notesService = {
  /*   update: async (id, content) => {
    const { data } = await httpService.put(notesEndpoin + id, content);
    return data;
  },
  get: async (id) => {
    const { data } = await httpService.get(notesEndpoin + id);
    return data;
  }, */
  fetchAll: async () => {
    const { data } = await httpService.get(notesEndpoin);

    return data;
  },
};
export default notesService;
