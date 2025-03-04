import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import { GenericForm } from "@/components/form/GenericForm/GenericForm";
import { ComponentMapper } from "@/components/ui/ComponentMapper/ComponentMapper";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { getFormById } from "@/services/formConfigsService";

import "./index.css";

export const FormPreview = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const id = params?.formId as string | undefined;

  const formEditorConfig = useAppSelector(
    ({ formConfigs: { formConfigs } }) => formConfigs
  );

  const formConfig = useMemo(() => {
    return formEditorConfig?.find((form) => form.id === id);
  }, [formEditorConfig, id]);

  useEffect(() => {
    if (!formConfig && id) {
      (async () => {
        const result = await getFormById(id, dispatch);

        if (!result.success) {
          alert("Error while fetching form");
          // TODO: snackbar implementation
          return;
        }
      })();
    }
  }, [formConfig, id, dispatch]);

  return (
    <div className="form-preview">
      {formConfig ? (
        <GenericForm
          formConfig={formConfig}
          componentMapper={ComponentMapper}
        />
      ) : (
        <div>Form not found</div>
      )}
    </div>
  );
};
