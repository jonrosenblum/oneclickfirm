import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
/** @typedef {ReturnType<typeof store.getState>} RootState */
// Inferred type: {posts: PostsState, comments: Com

export {};
