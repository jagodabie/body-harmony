"use client";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { ControlledTextField } from "../ControlledTextField/ControlledTextField";

type EditableControlledTextFieldProps = {
  controlledKey: string;
  name: string;
  customStyles?: Record<string, unknown>;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
  readFieldClass?: string;
};

import "./index.css";

export const EditableControlledTextField = ({
  controlledKey,
  name,
  customStyles,
  placeholder = "Type something...",
  readOnly = true,
  className = "",
  readFieldClass = "",
}: EditableControlledTextFieldProps) => {
  const [isEditing, setIsEditing] = useState(!readOnly);

  const handleToggle = () => setIsEditing((prev) => !prev);

  const { control } = useFormContext();

  const value = useWatch({
    control,
    name,
  });

  return (
    <div className={`editable-field ${className}`}>
      {isEditing ? (
        <ControlledTextField
          controlledKey={controlledKey}
          name={name}
          onBlur={handleToggle}
          onEnter={handleToggle}
          placeholder={placeholder}
          customStyles={customStyles}
        />
      ) : (
        <div
          role="button"
          className={`editable-field__read ${readFieldClass}`}
          onClick={handleToggle}
        >
          {value || placeholder}
        </div>
      )}
    </div>
  );
};
