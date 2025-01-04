import { FormConfig } from "@/types/GenericFrom";

// TODO: change place
export type UserFormData = {
  firstName: string;
  email: string;
  age: number;
  gender: string;
};

export const userFormConfig: FormConfig = {
  title: "User Registration",
  saveButtonLabel: "Register",
  fieldConfig: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
    },
  ],
};
