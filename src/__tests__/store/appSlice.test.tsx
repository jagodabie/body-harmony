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

describe("tests for appSlice", () => {
  test("initialize slice with initialValue", () => {
    const state = store.getState().app;
    expect(state).toEqual(initialState);
  });

  test("toggle theme works correctly", () => {
    // Initial state should be 'light'
    let state = store.getState().app;
    expect(state.theme).toBe("light");

    // Toggle theme to 'dark'
    store.dispatch(toggleTheme());
    state = store.getState().app;
    expect(state.theme).toBe("dark");

    // Toggle theme back to 'light'
    store.dispatch(toggleTheme());
    state = store.getState().app;
    expect(state.theme).toBe("light");
  });
});
