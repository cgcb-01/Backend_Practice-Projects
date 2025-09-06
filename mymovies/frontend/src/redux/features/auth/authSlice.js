import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCreadentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTme = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTme);
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
  s,
});
export const { setCreadentials, logout } = authSlice.actions;
export default authSlice.reducer;
