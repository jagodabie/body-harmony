import { ReactElement } from "react";
import { Control } from "react-hook-form";

import { ComponentMapperProps } from "@/app/formConfig/components/ComponentMapper";
import { EditorFormElementType } from "@/types/GenericForm";

import { OptionsBase } from "./editorFormElements/components/OptionsBase";
import { EditorFormSelect } from "./editorFormElements/EditorFormSelect/components/EditorFormSelect/EditorFormSelect";
import "./index.css";

export const ComponentMapper = ({
  type,
  name,
  control,
}: ComponentMapperProps & {
  control: Control;
}) => {
  // TODO: for now we are using the same options for radio and checkbox

  const radioOptions = ["option1", "option2", "option3", "option4"];

  const componentMap: Record<string, ReactElement | ""> = {
    multiline: <div className="element multiline"></div>,
    number: <div className="element">Type your number</div>,
    select: <EditorFormSelect control={control} name={name!} />,
    radio: (
      <OptionsBase
        options={radioOptions}
        control={control}
        shape
        name={name!}
        optionLabel="Type option"
        className="radio"
      />
    ),
    checkbox: (
      <OptionsBase
        options={radioOptions}
        control={control}
        name={name!}
        shape
        optionLabel="Type option"
        className="checkbox"
      />
    ),
  };

  return (
    componentMap[type as EditorFormElementType] || (
      <div className="element"></div>
    )
  );
};
