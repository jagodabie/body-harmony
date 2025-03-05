import { Grid } from "@mui/material";

import { FieldConfig } from "@/types/GenericForm";

import FormField from "../RenderField/RenderField";

type FormFieldsProps = {
  fieldConfig: FieldConfig[];
  Component: React.ElementType;
};

export const FormFields = ({ fieldConfig, Component }: FormFieldsProps) => {
  return (
    <Grid container spacing={1} data-testid="form-grid">
      {fieldConfig?.map((formConfigItem: FieldConfig) => (
        <FormField
          key={formConfigItem.name}
          formConfigItem={formConfigItem}
          Component={Component}
        />
      ))}
    </Grid>
  );
};
