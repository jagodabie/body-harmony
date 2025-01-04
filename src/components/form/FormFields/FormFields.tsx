import { FieldConfig } from "@/types/GenericFrom";
import FormField from "../RenderField/RenderField";
import { Control } from "react-hook-form";

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
