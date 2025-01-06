import { Grid } from "@mui/material";
import { Control } from "react-hook-form";

import { FieldConfig } from "@/types/GenericForm";

import FormField from "../RenderField/RenderField";

export const FormFields = ({
  fieldConfig,
  control,
}: {
  fieldConfig: FieldConfig[];
  control: Control;
}) => {
  return (
    <Grid container spacing={1} data-testid="form-grid">
      {fieldConfig?.map((formConfigItem: FieldConfig) => (
        <FormField
          key={formConfigItem.name}
          formConfigItem={formConfigItem}
          control={control}
        />
      ))}
    </Grid>
  );
};
