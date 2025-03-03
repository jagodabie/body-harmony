import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import formConfigsReducer from "./slices/formConfigsSlice";
import formEditorReducer from "./slices/formEditorSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    formEditor: formEditorReducer,
    formConfigs: formConfigsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
