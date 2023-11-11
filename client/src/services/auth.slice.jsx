import { createSlice } from "@reduxjs/toolkit";

/** @typedef {import('@reduxjs/toolkit').PayloadAction} PayloadAction */

/**
 * @typedef {{
 *  token: string | null;
 *  user: {
 *    username: string | null;
 *    firstName: string | null;
 *    lastName: string | null;
 *    email: string | null;
 *  } | null;
 *  refreshToken: string | null;
 *}} AuthState
 */

/** @type {AuthState} */
const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, /** @type {PayloadAction<string>} */ action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (
      state,
      /** @type {PayloadAction<{ username: string; firstName: string; lastName: string; email: string }>} */ action
    ) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    onLogin: (
      state,
      /** @type {PayloadAction<{ user: { username: string; firstName: string; lastName: string; email: string }; token: string; refreshToken: string }>} */ action
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    onLogout: (state, /** @type {PayloadAction} */ ) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("refreshToken");
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
