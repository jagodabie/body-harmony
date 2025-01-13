"use client";
import { useEffect, useState } from "react";

import { CheckboxIcon } from "@/assets/inputsIcons/CheckboxIcon";
import { EmailIcon } from "@/assets/inputsIcons/EmailIcon";
import { LongTextIcon } from "@/assets/inputsIcons/LongTextIcon";
import { NumberIcon } from "@/assets/inputsIcons/NumberIcon";
import { RadioIcon } from "@/assets/inputsIcons/RadioIcon";
import { SelectIcon } from "@/assets/inputsIcons/SelectIcon";
import { ShortTextIcon } from "@/assets/inputsIcons/ShortTextIcon";
import { TitleIcon } from "@/assets/inputsIcons/TitleIcon";
import { Nullable } from "@/types";
import { FormElements } from "@/types/FormBuilder";
import { EditorFormElementType } from "@/types/GenericForm";

import { EditorFormArea } from "./components/FormArea/EditorFormArea";
import { FormElementSettings } from "./components/FormElementSettings/FormElementSettings";
import { FormElementsList } from "./components/FormElementsList/FormElementsList";
import "./index.css";

// TODO: remove preform and add icons
const elementsList: FormElements[] = [
  {
    name: "Title",
    type: "title",
    icon: <TitleIcon />,
  },
  {
    name: "Text Field",
    type: "text",
    icon: <ShortTextIcon />,
  },
  {
    name: "Long Text Field",
    type: "multiline",
    icon: <LongTextIcon />,
  },

  {
    name: "Number Field",
    type: "number",
    icon: <NumberIcon />,
  },
  {
    name: "Select Field",
    type: "select",
    icon: <SelectIcon />,
  },
  {
    name: "Checkbox Field",
    type: "checkbox",
    icon: <CheckboxIcon />,
  },
  {
    name: "Radio Field",
    type: "radio",
    icon: <RadioIcon />,
  },
  {
    name: "Email Field",
    type: "email",
    icon: <EmailIcon />,
  },
];

const FormBuilder = () => {
  const [currentElementType, setCurrentElementType] =
    useState<Nullable<EditorFormElementType>>(null);
  // TODO: robię tablice
  const [selectedElements, setSelectedElements] = useState<
    EditorFormElementType[]
  >([]);

  const [currentEditingElement, setCurrentEditingElement] =
    useState<Nullable<number>>(null);

  // TODO : for now i wanna display only and think about structure

  useEffect(() => {
    setSelectedElements((prev) => {
      if (currentElementType === null) {
        return prev;
      }
      return [...prev, currentElementType as EditorFormElementType];
    });
  }, [currentElementType]);

  return (
    <div className="form-builder">
      <div className="form-builder__preview">
        <h3>Preview</h3>
      </div>
      <div className="form-builder__container">
        <div className="form-builder__elements">
          <FormElementsList
            elementsList={elementsList}
            selectElementType={(type: EditorFormElementType) =>
              setCurrentElementType(type)
            }
          />
        </div>
        <div className="form-builder__form">
          <EditorFormArea
            setCurrentEditingElement={setCurrentEditingElement}
            selectedElements={selectedElements}
          />
        </div>
        <div className="form-builder__settings">
          <FormElementSettings currentEditingElement={currentEditingElement} />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
