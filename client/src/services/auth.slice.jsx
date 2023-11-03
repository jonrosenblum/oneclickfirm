import { createSlice } from "@reduxjs/toolkit";
/** @typedef {import('@reduxjs/toolkit').PayloadAction} PayloadAction */

/**
 * @typedef {{
 *  token: string | null;
 *  user: object | null;
 *}} AuthState
 */

/** @type {AuthState} */
const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, /** @type {PayloadAction} */ action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, /** @type {PayloadAction} */ action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    onLogin: (
      state,
      /** @type {PayloadAction<{payload:{user:object,token:string}}>} */ action
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    onLogout: (state, /** @type {PayloadAction} */ ) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
