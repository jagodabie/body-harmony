"use client";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { elementsList } from "@/lib/inputsElementsList";

import { EditorFormArea } from "./EditorFormArea/EditorFormArea";
import { FormElementSettings } from "./editorFormElementsComponents/FormElementSettings/FormElementSettings";
import { FormElementsList } from "./editorFormElementsComponents/FormElementsList/FormElementsList";
import { FormPreview } from "./editorFormElementsComponents/FormPreview/FormPreview";
import "./index.css";

const FormEditor = () => {
  const [preview, setPreview] = useState(false);

  const searchParams = useSearchParams();
  const isPreview = searchParams.get("preview") === "true";

  useEffect(() => {
    setPreview(isPreview);
  }, [isPreview]);

  return (
    <div className="form-builder">
      <div className="form-builder__preview">
        <Button
          onClick={() => setPreview((prev) => !prev)}
          variant="contained"
          color="primary"
          startIcon={preview ? <CreateIcon /> : <VisibilityIcon />}
        >
          {preview ? "Edit" : "Preview"}
        </Button>
      </div>

      {preview ? (
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

export default FormEditor;
