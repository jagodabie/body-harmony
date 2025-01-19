import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  theme: "light" | "dark";
}

const initialState: AppState = {
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
