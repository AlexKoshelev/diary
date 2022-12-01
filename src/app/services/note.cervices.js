import httpService from "./http.service";
const noteEndpoin = "note/";

const noteService = {
  createNote: async (payload) => {
    const { data } = await httpService.put(noteEndpoin + payload._id, payload);
    return data;
  },
  getNote: async (pageId) => {
    const { data } = await httpService.get(noteEndpoin, {
      params: {
        orderBy: '"pageId"',
        equalTo: `"${pageId}"`,
      },
    });
    return data;
  },
  removeNote: async (commentId) => {
    const { data } = await httpService.delete(noteEndpoin + commentId);
    return data;
  },
};
export default noteService;
