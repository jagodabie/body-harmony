import { TextFieldVariants } from "@mui/material";

export type FieldType =
  | "number"
  | "text"
  | "select"
  | "checkbox"
  | "radio"
  | "email"
  | "";

export type EditorFormElementType = FieldType | "multiline" | "title";

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
  // TODO: think about better way to handle this
  type?: FieldType | EditorFormElementType;
  variant?: string;
  label: string;
  radiosValues?: string[];
  options?: Option[];
  multiline?: boolean;
  // TODO: for now optional but should be required
  xs?: number;
  md?: number;
};

export type FormConfig = {
  id?: string;
  formTitle?: string | null;
  saveButtonLabel?: string;
  fieldConfig?: FieldConfig[];
  formWidth?: string;
  isSynced?: boolean;
  updatedAt?: string;
  createdAt?: string;
};

export type FormValues = {
  formTitle: string;
};
