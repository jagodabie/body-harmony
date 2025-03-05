"use client";
import { Grid } from "@mui/material";
import { Controller, Path, useFormContext } from "react-hook-form";

import { FieldConfig } from "@/types/GenericForm";

type FormFieldProps = {
  formConfigItem: FieldConfig;
  Component: React.ElementType;
};

const FormField = ({ formConfigItem, Component }: FormFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      key={formConfigItem.name}
      control={control}
      name={formConfigItem.name as Path<unknown>}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={formConfigItem.xs || 12} md={formConfigItem.md || 12}>
          <Component
            onChange={onChange}
            value={value || ""}
            label={formConfigItem.label}
            name={formConfigItem.name}
            type={formConfigItem.type ?? ""}
            multiline={formConfigItem?.multiline}
            radiosValues={formConfigItem.radiosValues ?? []}
            options={formConfigItem.options ?? []}
          />
          {error && <span>{error.message}</span>}
        </Grid>
      )}
    />
  );
};

export default FormField;
