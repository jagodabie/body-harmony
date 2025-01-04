import { TextFieldVariants } from "@mui/material";

export type FieldType =
  | "number"
  | "text"
  | "select"
  | "checkbox"
  | "radio"
  | "email"
  | "";

export type Option = {
  value: string;
  label: string;
};

export type FormsElementProps = {
  label?: string;
  name?: string;
  variant?: TextFieldVariants;
  type: FieldType;
};

export type FieldConfig = {
  name: string;
  type?: FieldType;
  variant?: string;
  label: string;
  radiosValues?: string[];
  options?: Option[];
  multiline?: boolean;
};

export type FormConfig = {
  title?: string;
  saveButtonLabel?: string;
  fieldConfig: FieldConfig[];
};
