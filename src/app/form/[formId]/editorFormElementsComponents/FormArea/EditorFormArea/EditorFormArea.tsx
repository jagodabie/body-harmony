import { Button } from "@mui/material";
import { Control, useForm } from "react-hook-form";

import { EditableControlledTextField } from "@/components/ui/EditableControlledTextField/EditableControlledTextField";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { setFormEditorConfig } from "@/store/slices/formEditorSlice";
import { createFormConfig, mapDataToConfigFields } from "@/utils";

import { EditorFormElementWrapperWithActions } from "../FormAreaComponents/EditorFormElementWrapperWithActions/EditorFormElementWrapperWithActions";

import "./index.css";
import { saveFormConfig } from "@/lib/db";

export const EditorFormArea = () => {
  const { handleSubmit, control, unregister } = useForm();
  const { selectedFormFields } = useAppSelector(({ formEditor }) => formEditor);

  const dispatch = useAppDispatch();

  // TODO: For now separate form

  // TODO: rare data to keep

  return (
    <form
      role="form"
      onSubmit={handleSubmit(async (data) => {
        const formConfig = createFormConfig(data);
        await saveFormConfig(formConfig);
        dispatch(setFormEditorConfig(formConfig));
      })}
    >
      <div className="editor-form-area__container">
        <div role="header" className="editor-form-area__header">
          <EditableControlledTextField
            controlledKey="formTitle"
            name="formTitle"
            control={control}
            placeholder="Type form title..."
            readOnly={false}
            customStyles={{
              ".MuiInput-root::before": {
                content: '""',
                border: "none",
              },
              "& .MuiInputBase-input": {
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
            readFieldClass="form-header"
          />
        </div>

        {selectedFormFields.length > 0 ? (
          <>
            <div className="editor-form-area__body">
              {selectedFormFields.map((element) => (
                <EditorFormElementWrapperWithActions
                  key={element.name}
                  element={element}
                  control={control as Control}
                  unregister={unregister}
                />
              ))}
            </div>
            <div role="footer" className="editor-form-area__footer">
              <Button variant="text" type="submit">
                Confirm Form configuration
              </Button>
            </div>
          </>
        ) : (
          <div className="editor-form-area__empty">
            <p>Choose element from left side.</p>
          </div>
        )}
      </div>
    </form>
  );
};
