"use client";

import { GenericForm } from "@/components/form/GenericForm/GenericForm";

import ComponentMapper from "./components/ComponentMapper";

import { userFormConfig, UserFormData } from ".";

const UserRegistrationForm = () => {
  const handleFormSubmit = (data: UserFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <h2>Patient Details</h2>
      <GenericForm<UserFormData>
        formConfig={userFormConfig}
        onSubmit={handleFormSubmit}
        componentMapper={ComponentMapper}
      />
    </>
  );
};

export default UserRegistrationForm;
