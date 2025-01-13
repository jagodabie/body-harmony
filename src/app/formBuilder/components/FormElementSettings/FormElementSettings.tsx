import { Nullable } from "@/types";

export const FormElementSettings = ({
  currentEditingElement,
}: {
  currentEditingElement: Nullable<number>;
}) => {
  return (
    <div className="form-element-settings__container ">
      <h3>Settings: {currentEditingElement} </h3>
    </div>
  );
};
