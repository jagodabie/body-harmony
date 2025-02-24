import { Control } from "react-hook-form";

import { FieldConfig } from "@/types/GenericForm";

import { EditorFormElementActions } from "../EditorFormElementActions/EditorFormElementActions";
import { EditorFormElementWrapper } from "../EditorFormElementWrapper/EditorFormElementWrapper";

export const EditorFormElementWrapperWithActions = ({
  element,
  control,
  unregister,
}: {
  element: FieldConfig;
  control: Control;
  unregister: (name: string) => void;
}) => {
  return (
    <div className="editor-form-element-wrapper-with-actions">
      <EditorFormElementWrapper element={element} control={control} />
      <EditorFormElementActions id={element.name} unregister={unregister} />
    </div>
  );
};
