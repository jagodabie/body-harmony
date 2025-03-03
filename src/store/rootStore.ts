import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import formConfigsReducer from "./slices/formConfigsSlice";
import formEditorReducer from "./slices/formEditorSlice";

export const rootReducer = combineReducers({
  app: appReducer,
  formEditor: formEditorReducer,
  formConfigs: formConfigsReducer,
});
