import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FormConfig } from "@/types/GenericForm";

type FormsConfigState = {
  formConfigs: FormConfig[];
  isLoading: boolean;
};
const initialState: FormsConfigState = {
  formConfigs: [],
  isLoading: false,
};

const formConfigsSlice = createSlice({
  name: "formConfigs",
  initialState,
  reducers: {
    setFormConfigs: (state, action: PayloadAction<FormConfig[]>) => {
      state.formConfigs = action.payload;
    },
    addFormConfig: (state, action: PayloadAction<FormConfig>) => {
      state.formConfigs.push(action.payload);
    },
    deleteFormConfig: (state, action: PayloadAction<number>) => {
      state.formConfigs = state.formConfigs.filter(
        (form) => form.id !== action.payload.toString()
      );
    },
    editFormConfig: (state, action: PayloadAction<FormConfig>) => {
      const index = state.formConfigs.findIndex(
        (form) => form.id === action.payload.id
      );
      if (index !== -1) {
        state.formConfigs[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setFormConfigs,
  addFormConfig,
  deleteFormConfig,
  editFormConfig,
  setLoading,
} = formConfigsSlice.actions;
export default formConfigsSlice.reducer;
