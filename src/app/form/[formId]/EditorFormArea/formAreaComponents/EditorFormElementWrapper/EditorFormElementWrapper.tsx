"use client";
import { useRef } from "react";

import { ElementMapper } from "@/app/form/[formId]/editorFormElementsComponents/ElementMapper/ElementMapper";
import { ControlledTextField } from "@/components/ui/ControlledTextField/ControlledTextField";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { useClickOutside } from "@/hooks/useClickOutsideHandler";
import { setEditingElement } from "@/store/slices/formEditorSlice";
import { FieldConfig } from "@/types/GenericForm";

import "./index.css";

type EditorFormElementProps = {
  element: FieldConfig;
};

export const EditorFormElementWrapper = ({
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
          placeholder="Type question"
        />
      </div>

      {type !== "title" && (
        <>
          <ElementMapper type={type!} name={name} />
          <div className="editor-form-element-wrapper__label">
            <ControlledTextField
              controlledKey={`${name}-label`}
              name={`${name}-label`}
              placeholder="Type input label"
            />
          </div>
        </>
      )}
    </div>
  );
};
