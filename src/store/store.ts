import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import formEditorReducer from "./slices/formEditorSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    formEditor: formEditorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
