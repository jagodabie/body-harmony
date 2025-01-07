"use client";

import { EditorFormArea } from "@/components/formbuilder/FormArea/EditorFormArea";
import { FormElementsList } from "@/components/formbuilder/FormElementsList/FormElementsList";

import "./index.css";

// TODO: remove preform and add icons
const elementsList = [
  {
    name: "Title",
    type: "title",
    icon: <div>Icon</div>,
  },
  {
    name: "Text Field",
    type: "text",
    icon: <div>Icon</div>,
  },
  {
    name: "Number Field",
    type: "number",
    icon: <div>Icon</div>,
  },
  {
    name: "Select Field",
    type: "select",
    icon: <div>Icon</div>,
  },
  {
    name: "Checkbox Field",
    type: "checkbox",
    icon: <div>Icon</div>,
  },
  {
    name: "Radio Field",
    type: "radio",
    icon: <div>Icon</div>,
  },
  {
    name: "Email Field",
    type: "email",
    icon: <div>Icon</div>,
  },
];

const FormBuilder = () => {
  return (
    <div className="form-builder">
      <div className="form-builder__preview">
        <h3>Preview</h3>
      </div>
      <div className="form-builder__container">
        <div className="form-builder__elements">
          <h3>Form Element</h3>
          <FormElementsList elementsList={elementsList} />
        </div>
        <div className="form-builder__form">
          <h3>Form</h3>
          <EditorFormArea formElementsToDisplay={{ type: "text" }} />
        </div>
        <div className="form-builder__settings">
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
