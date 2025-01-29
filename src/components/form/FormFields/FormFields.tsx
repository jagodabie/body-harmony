import { Grid } from "@mui/material";
import { Control } from "react-hook-form";

import { FieldConfig } from "@/types/GenericForm";

import FormField from "../RenderField/RenderField";

type FormFieldsProps = {
  fieldConfig: FieldConfig[];
  control: Control;
  Component: React.ElementType;
};

export const FormFields = ({
  fieldConfig,
  control,
  Component,
}: FormFieldsProps) => {
  return (
    <Grid container spacing={1} data-testid="form-grid">
      {fieldConfig?.map((formConfigItem: FieldConfig) => (
        <FormField
          key={formConfigItem.name}
          formConfigItem={formConfigItem}
          control={control}
          Component={Component}
        />
      ))}
    </Grid>
  );
};
