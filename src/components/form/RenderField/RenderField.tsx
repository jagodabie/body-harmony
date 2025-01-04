"use client";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import ComponentMapper from "../ComponentMapper/ComponentMapper";
import { FieldConfig } from "@/types/GenericFrom";

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
        <div>
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
        </div>
      )}
    />
  );
};

export default FormField;
