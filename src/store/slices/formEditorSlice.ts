import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Nullable } from "@/types";
import { EditorFormElementType, FieldConfig } from "@/types/GenericForm";

interface FormEditorState {
  selectedFormFields: FieldConfig[];
  editingElement: Nullable<string>;
  formElementsCount: Record<EditorFormElementType, number>;
}

const initialState: FormEditorState = {
  selectedFormFields: [],
  editingElement: null,
  formElementsCount: {} as Record<EditorFormElementType, number>,
};

const formEditorSlice = createSlice({
  name: "formEditor",
  initialState,
  reducers: {
    addSelectedFormField: (
      state: FormEditorState,
      action: PayloadAction<FieldConfig>
    ) => {
      state.selectedFormFields.push(action.payload);
    },

    setEditingElement: (
      state: FormEditorState,
      action: PayloadAction<Nullable<string>>
    ) => {
      state.editingElement = action.payload;
    },
    addFieldWithCount: (
      state: FormEditorState,
      action: PayloadAction<EditorFormElementType>
    ) => {
      const elementType = action.payload;

      const currentCount = state.formElementsCount[elementType] || 0;
      state.formElementsCount[elementType] = currentCount + 1;

      const elementName = `${elementType}-${state.formElementsCount[elementType]}`;

      state.selectedFormFields.push({
        name: elementName,
        type: elementType,
        label: "",
      });
      state.editingElement = elementName;
    },
    deleteSelectedFormField: (
      state: FormEditorState,
      action: PayloadAction<string>
    ) => {
      state.selectedFormFields = state.selectedFormFields.filter(
        (field) => field.name !== action.payload
      );
    },
  },
});

export const {
  addSelectedFormField,
  setEditingElement,
  addFieldWithCount,
  deleteSelectedFormField,
} = formEditorSlice.actions;
export default formEditorSlice.reducer;
