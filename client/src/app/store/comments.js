import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";
const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: null,
    isLoading: true,
    errors: null,
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true;
    },
    commentsRecived: (state, action) => {
      state.entities = action.payload;

      state.isLoading = false;
    },
    commentsRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    commentsCreate(state, action) {
      state.entities.push(action.payload);
    },
    commentsRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (com) => com._id !== action.payload
      );
    },
  },
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
  commentsRequested,
  commentsRecived,
  commentsRequestFailed,
  commentsCreate,
  commentsRemoved,
} = actions;

export const loadCommentsList = () => async (dispatch) => {
  dispatch(commentsRequested());
  try {
    const content = await commentService.getComments();

    dispatch(commentsRecived(content));
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};
export const createComment = (comment) => async (dispatch) => {
  console.log(comment);
  try {
    const { content } = await commentService.createComment(comment);
    console.log(content);

    dispatch(commentsCreate(content));
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};

export const removeComment = (id) => async (dispatch) => {
  console.log(id);

  try {
    const content = await commentService.removeComment(id);
    console.log(content);

    if (content === null) {
      dispatch(commentsRemoved(id));
    }
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};

export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading;
export const getCommentsOfClients = (id) => (state) => {
  if (state.comments.entities) {
    return state.comments.entities.filter((comment) => comment.clientId === id);
  }
};

export const getCommentsById = (id) => (state) =>
  state.comments.entities.find((prof) => prof._id === id);

export default commentsReducer;
