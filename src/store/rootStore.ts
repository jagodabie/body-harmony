import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import formEditorReducer from "./slices/formEditorSlice";

export const rootReducer = combineReducers({
  app: appReducer,
  formEditor: formEditorReducer,
});
