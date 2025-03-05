import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

import { EditorFormElementType, FieldType } from "@/types/GenericForm";

import { EditorFormSelect } from "./editorFormElements/editorFormElementsComponents/EditorFormSelect/EditorFormSelect";
import { OptionsBase } from "./editorFormElements/editorFormElementsComponents/OptionsBase";
import "./index.css";

type ElementMapperProps = {
  type: FieldType | EditorFormElementType;
  name: string;
};

export const ElementMapper = ({ type, name }: ElementMapperProps) => {
  // TODO: for now we are using the same options for radio and checkbox

  const radioOptions = ["option1", "option2", "option3", "option4"];

  const { control } = useFormContext();

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
