"use client";
import { elementsList } from "@/lib/inputsElementsList";

import { EditorFormArea } from "./editorFormElementsComponents/FormArea/EditorFormArea/EditorFormArea";
import { FormElementSettings } from "./editorFormElementsComponents/FormElementSettings/FormElementSettings";
import { FormElementsList } from "./editorFormElementsComponents/FormElementsList/FormElementsList";
import "./index.css";

const FormBuilder = () => {
  // TODO : for now i wanna display only and think about structure

  return (
    <div className="form-builder">
      <div className="form-builder__preview">
        <h3>Preview</h3>
      </div>
      <div className="form-builder__container">
        <div className="form-builder__elements">
          <FormElementsList elementsList={elementsList} />
        </div>
        <div className="form-builder__form">
          <EditorFormArea />
        </div>
        <div className="form-builder__settings">
          <FormElementSettings />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
