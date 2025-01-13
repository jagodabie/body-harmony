"use client";
import { Button } from "@mui/material";
import { Control, FieldValues, useForm } from "react-hook-form";

import { FormConfig } from "@/types/GenericForm";

import { FormFields } from "../FormFields/FormFields";

import "./index.css";

export type GenericFormProps<T extends FieldValues> = {
  formConfig: FormConfig;
  onSubmit: (data: T) => void;
  ComponentMapper: React.ElementType; // Nowy props
};

export const GenericForm = <T extends FieldValues>({
  formConfig: { fieldConfig, saveButtonLabel, formWidth },
  onSubmit,
  ComponentMapper,
}: GenericFormProps<T>) => {
  const { handleSubmit, control } = useForm<T>();

  return (
    <form
      role="form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      style={{ width: formWidth ?? "100%" }}
    >
      <FormFields
        fieldConfig={fieldConfig}
        control={control as Control}
        Component={ComponentMapper}
      />
      <div className="form-submit">
        <Button variant="contained" type="submit" aria-label="Save form">
          {saveButtonLabel}
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
