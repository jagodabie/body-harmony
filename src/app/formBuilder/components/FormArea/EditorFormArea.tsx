import { Button } from "@mui/material";
import { Control, useForm } from "react-hook-form";

import { EditableControlledTextField } from "@/components/ui/EditableControlledTextField/EditableControlledTextField";
import { EditorFormElementType } from "@/types/GenericForm";

import { EditorFormElementWrapper } from "./components/EditorFormElementWrapper";
import "./index.css";

// TODO: for now only one element is supported - optional
type EditorFormAreaProps = {
  selectedElements: EditorFormElementType[];
  setCurrentEditingElement: (index: number) => void;
};

export const EditorFormArea = ({ selectedElements }: EditorFormAreaProps) => {
  const { handleSubmit, control } = useForm();

  // TODO: For now separate form
  return (
    <form
      role="form"
      onSubmit={handleSubmit((data) => console.log(data, "test"))}
    >
      <div className="editor-form-area__container">
        <div className="editor-form-area__header">
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
        {selectedElements.length > 0 ? (
          <>
            <div className="editor-form-area__body">
              {/* TODO: change keys */}
              {selectedElements.map((element, index) => (
                <EditorFormElementWrapper
                  key={index}
                  type={element}
                  // TODO: dynamic order
                  order={1}
                  control={control as Control}
                />
              ))}
            </div>
            <div className="editor-form-area__footer">
              <Button variant="text">Confirm Form configuration</Button>
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
