import { useAppSelector } from "@/hooks/useAppDispatch";

export const FormElementSettings = () => {
  const editingElement = useAppSelector(
    ({ formEditor }) => formEditor.editingElement
  );

  return (
    <div className="form-element-settings__container ">
      <h3>Settings: {editingElement} </h3>
    </div>
  );
};
