import React, { useState } from "react";
import { Control, useWatch } from "react-hook-form";

import { ControlledTextField } from "../ControlledTextField/ControlledTextField";

type EditableControlledTextFieldProps = {
  control: Control;
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
  control,
  name,
  customStyles,
  placeholder = "Type something...",
  readOnly = true,
  className = "",
  readFieldClass = "",
}: EditableControlledTextFieldProps) => {
  const [isEditing, setIsEditing] = useState(!readOnly);

  const handleToggle = () => setIsEditing((prev) => !prev);

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
          control={control}
          onBlur={handleToggle}
          onEnter={handleToggle}
          placeholder={placeholder}
          customStyles={customStyles}
        />
      ) : (
        <span
          className={`editable-field__read ${readFieldClass}`}
          onClick={handleToggle}
        >
          {value || placeholder}
        </span>
      )}
    </div>
  );
};
