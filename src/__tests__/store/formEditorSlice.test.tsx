import { configureStore } from "@reduxjs/toolkit";
import { act } from "react";

import { FormEditorState } from "@/store/slices/formEditorSlice";
import formEditorReducer, {
  addFieldWithCount,
  addSelectedFormField,
  deleteSelectedFormField,
  setEditingElement,
} from "@/store/slices/formEditorSlice";
import { EditorFormElementType, FieldConfig } from "@/types/GenericForm";

const initialState: FormEditorState = {
  selectedFormFields: [],
  editingElement: null,
  formElementsCount: {} as Record<EditorFormElementType, number>,
};

export const createStore = (initialState: FormEditorState) => {
  return configureStore({
    reducer: {
      formEditor: formEditorReducer,
    },
    preloadedState: {
      formEditor: initialState,
    },
  });
};

describe("formEditorSlice", () => {
  it("Initialize slice with initialValue.", () => {
    const state = createStore(initialState).getState().formEditor;
    expect(state).toEqual(initialState);
  });

  it("AddSelectedFormField works correctly.", () => {
    const field: FieldConfig = {
      name: "name",
      type: "text",
      label: "",
    };

    const store = createStore(initialState);

    store.dispatch(addSelectedFormField(field));

    const state = store.getState().formEditor;
    expect(state.selectedFormFields).toContain(field);
  });

  it("SetEditingElement works correctly.", () => {
    const store = createStore(initialState);

    store.dispatch(setEditingElement("name"));

    const state = store.getState().formEditor;
    expect(state.editingElement).toBe("name");
  });

  it("AddFieldWithCount works correctly.", async () => {
    const store = createStore(initialState);

    store.dispatch(addFieldWithCount("text"));

    const state = store.getState().formEditor;
    expect(state.selectedFormFields).toHaveLength(1);
    expect(state.formElementsCount.text).toBe(1);
    expect(state.editingElement).toBe("text-1");

    await act(() => {
      store.dispatch(addFieldWithCount("text"));
    });

    const updatedState = store.getState().formEditor;
    expect(updatedState.selectedFormFields).toHaveLength(2);
  });

  it("DeleteSelectedFormField works correctly.", () => {
    const initialState: FormEditorState = {
      selectedFormFields: [
        { name: "text-1", type: "text", label: "" },
        { name: "text-2", type: "text", label: "" },
        { name: "text-3", type: "text", label: "" },
      ],

      editingElement: null,
      formElementsCount: {
        text: 3,
        "": 0,
        number: 0,
        select: 0,
        checkbox: 0,
        radio: 0,
        email: 0,
        multiline: 0,
        title: 0,
      },
    };

    const store = createStore(initialState);
    store.dispatch(deleteSelectedFormField("text-1"));

    expect(store.getState().formEditor.selectedFormFields).toHaveLength(2);
  });
});
