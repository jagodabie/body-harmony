import { FormConfig } from "@/types/GenericForm";

// TODO: change place
export type UserFormData = {
  firstName: string;
  email: string;
  age: number;
  gender: string;
};

// TODO: xs and width remove mock xs values

export const userFormConfig: FormConfig = {
  saveButtonLabel: "Confirm",
  formWidth: "60%",
  fieldConfig: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      xs: 12,
      md: 6,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      xs: 12,
      md: 6,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      xs: 12,
      md: 2,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      xs: 12,
      md: 6,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
      xs: 12,
      md: 4,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      xs: 12,
      md: 4,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
    },
  ],
};
