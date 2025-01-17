import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addFieldWithCount } from "@/store/slices/formEditorSlice";
import { FormElements } from "@/types/FormBuilder";

import "./index.css";

type FormElementsListProps = {
  elementsList: FormElements[];
};

export const FormElementsList = ({ elementsList }: FormElementsListProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <h4>Elements list</h4>
      <ul>
        {elementsList.map((element: FormElements) => {
          return (
            <li
              key={element.name}
              className="form-elements-list__element"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addFieldWithCount(element.type));
              }}
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
