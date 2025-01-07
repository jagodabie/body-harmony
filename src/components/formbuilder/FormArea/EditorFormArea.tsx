import { EditorFormElement } from "./components/EditorFormElement";

type EditorFormAreaProps = {
  formElementsToDisplay: {
    type: string;
  };
};

export const EditorFormArea = ({
  formElementsToDisplay: { type },
}: EditorFormAreaProps) => {
  return (
    <div className="editor-form-area__container">
      <h3>Form: {type}</h3>
      <EditorFormElement
        type="text"
        questionPlaceholder="Type your's question"
        elementLabel="Enter your's answer"
      />
    </div>
  );
};
