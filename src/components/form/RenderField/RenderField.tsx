"use client";
import { Grid } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { FieldConfig } from "@/types/GenericForm";

import ComponentMapper from "../ComponentMapper/ComponentMapper";

type FormFieldProps<T extends FieldValues> = {
  formConfigItem: FieldConfig;
  control: Control<T>;
};

const FormField = <T extends FieldValues>({
  formConfigItem,
  control,
}: FormFieldProps<T>) => {
  return (
    <Controller
      key={formConfigItem.name}
      control={control}
      name={formConfigItem.name as Path<T>}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={formConfigItem.xs} md={formConfigItem.md}>
          <ComponentMapper
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
