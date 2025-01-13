import { useState } from "react";
import { Control } from "react-hook-form";

import { OptionsBase } from "../../../components/OptionsBase";

import { SelectLabel } from "./SelectLabel";

export const EditorFormSelect = ({
  control,
  name,
}: {
  control: Control;
  name: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="element-select">
      <SelectLabel isActive={isActive} setIsActive={setIsActive} />
      {isActive && (
        <OptionsBase
          control={control}
          name={name}
          options={["option1", "option2", "option3", "option4"]}
          optionLabel={"Type option"}
          className="select"
        />
      )}
    </div>
  );
};
