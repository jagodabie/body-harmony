import { useState } from "react";
import { Control } from "react-hook-form";

import { ControlledTextField } from "@/components/ui/ControlledTextField/ControlledTextField";
import { EditorFormElementType } from "@/types/GenericForm";

import { ComponentMapper } from "../../ComponentMapper/ComponentMapper";

import "./index.css";

type EditorFormElementProps = {
  type: EditorFormElementType;
  order: number;
  control: Control;
};

export const EditorFormElementWrapper = ({
  type,
  order,
  control,
}: EditorFormElementProps) => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive, "sadasd");

  return (
    <div
      onMouseDown={() => console.log("tets")}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      className={`editor-form-element-wrapper ${isActive ? "active" : ""}`}
    >
      <div className="editor-form-element-wrapper__question">
        <ControlledTextField
          controlledKey={`${type}-${order}-question`}
          name={`${type}-${order}-question`}
          control={control}
          placeholder="Type question"
        />
      </div>

      {type !== "title" && (
        <>
          <ComponentMapper
            type={type}
            name={`${type}-${order}`}
            control={control}
          />
          <div className="editor-form-element-wrapper__label">
            <ControlledTextField
              controlledKey={`${type}-${order}-label`}
              name={`${type}-${order}-label`}
              control={control}
              placeholder="Type input label"
            />
          </div>
        </>
      )}
    </div>
  );
};
