import { GenericForm } from "@/components/form/GenericForm/GenericForm";
import { ComponentMapper } from "@/components/ui/ComponentMapper/ComponentMapper";
import { useAppSelector } from "@/hooks/useAppDispatch";

import "./index.css";

export const FormPreview = () => {
  const formEditorConfig = useAppSelector(
    ({ formEditor: { formEditorConfig } }) => formEditorConfig
  );
  return (
    <div className="form-preview">
      {
        <GenericForm
          formConfig={formEditorConfig}
          componentMapper={ComponentMapper}
        />
      }
    </div>
  );
};
