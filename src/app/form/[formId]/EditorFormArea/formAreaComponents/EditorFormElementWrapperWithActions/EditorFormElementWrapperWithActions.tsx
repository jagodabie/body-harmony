"use client";
import { FieldConfig } from "@/types/GenericForm";

import { EditorFormElementActions } from "../EditorFormElementActions/EditorFormElementActions";
import { EditorFormElementWrapper } from "../EditorFormElementWrapper/EditorFormElementWrapper";

type EditorFormElementWrapperWithActionsProps = {
  element: FieldConfig;
};

export const EditorFormElementWrapperWithActions = ({
  element,
}: EditorFormElementWrapperWithActionsProps) => {
  return (
    <div className="editor-form-element-wrapper-with-actions">
      <EditorFormElementWrapper element={element} />
      <EditorFormElementActions id={element.name} />
    </div>
  );
};
