import { createSlice } from "@reduxjs/toolkit";
import { posts as Posts } from "../../mocks/post";

const initialState = {
  posts: Posts,
};

export const postReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => {
        console.log(
          "postId:" + post.id,
          "Action Payload Id: " + action.payload
        );
        return post.id !== action.payload;
      });
    },
  },
});

export const { addPost, removePost } = postReducer.actions;
export default postReducer.reducer;
