import { TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

export const customStyles = {
  "& .MuiInputBase-input": {
    padding: "0",
  },
  "& .MuiInputBase-root::after": {
    border: "none",
  },
  "& .MuiInputBase-root::before": {
    border: "none",
  },
  "&:hover .MuiInputBase-root::after": {
    border: "none",
  },
  "&:hover .MuiInputBase-root::before": {
    border: "none",
  },
  "& .MuiInputBase-root.Mui-focused": {
    borderBottom: " solid 2px var(--primary-main)",
  },
};

type ControlledTextFieldProps = {
  controlledKey: string;
  name: string;
  onBlur?: () => void;
  onEnter?: () => void;
  placeholder: string;
  customStyles?: Record<string, unknown>;
};

export const ControlledTextField = <T extends FieldValues>({
  controlledKey,
  name,
  onBlur,
  onEnter,
  placeholder,
  customStyles,
}: ControlledTextFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      key={controlledKey}
      name={name as Path<T>}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          name={name as string}
          onChange={onChange}
          variant="standard"
          value={value ?? ""}
          onBlur={onBlur}
          onKeyPress={(e) => {
            if (e.key === "Enter" && onEnter) {
              onEnter();
            }
          }}
          placeholder={placeholder}
          sx={customStyles}
          inputProps={{
            sx: {
              "&::placeholder": {
                color: "var(--text-placeholder)",
                fontSize: "var(--font-size-small)",
              },
            },
          }}
          fullWidth
        />
      )}
    />
  );
};
