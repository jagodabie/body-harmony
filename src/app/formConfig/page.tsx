"use client";
import GenericForm from "@/components/form/GenericForm/GenericForm";

import { userFormConfig, UserFormData } from ".";

const UserRegistrationForm = () => {
  const handleFormSubmit = (data: UserFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <GenericForm<UserFormData>
        formConfig={userFormConfig}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default UserRegistrationForm;
