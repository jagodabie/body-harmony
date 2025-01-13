import { FormElements } from "@/types/FormBuilder";
import { EditorFormElementType } from "@/types/GenericForm";

import "./index.css";

type FormElementsListProps = {
  elementsList: FormElements[];
  selectElementType(type: EditorFormElementType): void;
};

export const FormElementsList = ({
  elementsList,
  selectElementType,
}: FormElementsListProps) => {
  return (
    <>
      <h4>Elements list</h4>
      <ul>
        {elementsList.map((element: FormElements) => {
          return (
            <li
              key={element.name}
              className="form-elements-list__element"
              onClick={() => selectElementType(element.type)}
            >
              <div className="form-elements-list__element-icon">
                {element.icon}
              </div>
              <div className="form-elements-list__element-name">
                {element.name}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
