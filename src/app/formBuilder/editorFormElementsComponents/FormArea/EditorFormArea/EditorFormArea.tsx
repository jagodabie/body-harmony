import { Button } from "@mui/material";
import { Control, useForm } from "react-hook-form";

import { EditableControlledTextField } from "@/components/ui/EditableControlledTextField/EditableControlledTextField";
import { useAppSelector } from "@/hooks/useAppDispatch";

import { EditorFormElementWrapperWithActions } from "../FormAreaComponents/EditorFormElementWrapperWithActions/EditorFormElementWrapperWithActions";

import "./index.css";

export const EditorFormArea = () => {
  const { handleSubmit, control } = useForm();
  const { selectedFormFields } = useAppSelector(({ formEditor }) => formEditor);

  // TODO: For now separate form

  return (
    <form
      role="form"
      onSubmit={handleSubmit((data) => console.log(data, "test"))}
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
