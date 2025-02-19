"use client";
import { useState } from "react";

import { elementsList } from "@/lib/inputsElementsList";

import { EditorFormArea } from "./editorFormElementsComponents/FormArea/EditorFormArea/EditorFormArea";
import { FormElementSettings } from "./editorFormElementsComponents/FormElementSettings/FormElementSettings";
import { FormElementsList } from "./editorFormElementsComponents/FormElementsList/FormElementsList";
import { FormPreview } from "./editorFormElementsComponents/FormPreview/FormPreview";
import "./index.css";

const FormBuilder = () => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="form-builder">
      <div className="form-builder__preview">
        <h3>{isPreview ? "Preview Mode" : "Editor Mode"}</h3>
        <button onClick={() => setIsPreview((prev) => !prev)}>
          {isPreview ? "Back to Edit" : "Preview Form"}
        </button>
      </div>

      {isPreview ? (
        <FormPreview />
      ) : (
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
      )}
    </div>
  );
};

export default FormBuilder;
