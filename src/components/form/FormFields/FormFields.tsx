import { Control } from "react-hook-form";

import { FieldConfig } from "@/types/GenericFrom";

import FormField from "../RenderField/RenderField";

export const FormFields = ({
  fieldConfig,
  control,
}: {
  fieldConfig: FieldConfig[];
  control: Control;
}) => {
  return (
    <div className="form-fields">
      {fieldConfig?.map((formConfigItem: FieldConfig) => (
        <FormField
          key={formConfigItem.name}
          formConfigItem={formConfigItem}
          control={control}
        />
      ))}
    </div>
  );
};
