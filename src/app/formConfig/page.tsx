"use client";
import { userFormConfig, UserFormData } from ".";
import GenericForm from "@/components/form/GenericForm/GenericForm";

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
