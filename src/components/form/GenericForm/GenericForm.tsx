"use client";
import { Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";

import { FormConfig } from "@/types/GenericForm";

import { FormFields } from "../FormFields/FormFields";

import "./index.css";

export type GenericFormProps<T extends FieldValues> = {
  formConfig: FormConfig;
  onSubmit?: (data: T) => void;
  componentMapper: React.ElementType;
};

export const GenericForm = <T extends FieldValues>({
  formConfig: { fieldConfig, saveButtonLabel, formWidth },
  onSubmit,
  componentMapper,
}: GenericFormProps<T>) => {
  const { handleSubmit } = useForm<T>();

  return (
    <form
      role="form"
      onSubmit={handleSubmit((data) => onSubmit && onSubmit(data))}
      style={{ width: formWidth ?? "100%" }}
    >
      <FormFields fieldConfig={fieldConfig!} Component={componentMapper} />
      <div className="form-submit">
        <Button variant="contained" type="submit" aria-label="Save form">
          {saveButtonLabel || "Save"}
        </Button>
        <Button
          variant="outlined"
          aria-label="Cancel form"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to cancel? Unsaved changes will be lost."
              )
            ) {
              window.history.back();
            }
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
