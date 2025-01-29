import { configureStore } from "@reduxjs/toolkit";

import appReducer, { toggleTheme } from "@/store/slices/appSlice";
import { AppState } from "@/store/slices/appSlice";

const initialState: AppState = {
  theme: "light",
};

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  preloadedState: {
    app: initialState,
  },
});

describe("appSlice", () => {
  it("initialize slice with initialValue", () => {
    const state = store.getState().app;
    expect(state).toEqual(initialState);
  });

  it("toggle theme works correctly", () => {
    let state = store.getState().app;
    expect(state.theme).toBe("light");

    store.dispatch(toggleTheme());
    state = store.getState().app;
    expect(state.theme).toBe("dark");

    store.dispatch(toggleTheme());
    state = store.getState().app;
    expect(state.theme).toBe("light");
  });
});
