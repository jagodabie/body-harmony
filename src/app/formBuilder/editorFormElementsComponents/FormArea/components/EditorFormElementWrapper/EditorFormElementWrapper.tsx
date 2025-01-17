import { useRef } from "react";
import { Control } from "react-hook-form";

import { useClickOutside } from "@/__tests__/hooks/useClickOutsideHandler";
import { ControlledTextField } from "@/components/ui/ControlledTextField/ControlledTextField";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { setEditingElement } from "@/store/slices/formEditorSlice";
import { FieldConfig } from "@/types/GenericForm";

import { ComponentMapper } from "../../../ElementMapper/ElementMapper";

import "./index.css";

type EditorFormElementProps = {
  element: FieldConfig;
  control: Control;
};

export const EditorFormElementWrapper = ({
  control,
  element: { type, name },
}: EditorFormElementProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const editingElement = useAppSelector(
    ({ formEditor: { editingElement } }) => editingElement
  );
  const dispatch = useAppDispatch();

  useClickOutside(wrapperRef, () => dispatch(setEditingElement("")));

  return (
    <div
      ref={wrapperRef}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(setEditingElement(name));
      }}
      id={name}
      className={`editor-form-element-wrapper ${
        editingElement === name ? "active" : ""
      }`}
    >
      <div className="editor-form-element-wrapper__question">
        <ControlledTextField
          controlledKey={`${name}-question`}
          name={`${name}-question`}
          control={control}
          placeholder="Type question"
        />
      </div>

      {type !== "title" && (
        <>
          <ComponentMapper type={type} name={name} control={control} />
          <div className="editor-form-element-wrapper__label">
            <ControlledTextField
              controlledKey={`${name}-label`}
              name={`${name}-label`}
              control={control}
              placeholder="Type input label"
            />
          </div>
        </>
      )}
    </div>
  );
};
