"use client";
import { useForm, FieldValues, Control } from "react-hook-form";
import { FormConfig } from "@/types/GenericFrom";

import "./index.css";
import { Button } from "@mui/material";
import { FormFields } from "../FormFields/FormFields";

export type GenericFormProps<T extends FieldValues> = {
  formConfig: FormConfig;
  onSubmit: (data: T) => void;
};

export const GenericForm = <T extends FieldValues>({
  formConfig: { fieldConfig, saveButtonLabel },
  onSubmit,
}: GenericFormProps<T>) => {
  const { handleSubmit, control } = useForm<T>();

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <FormFields fieldConfig={fieldConfig} control={control as Control} />
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

export default GenericForm;
