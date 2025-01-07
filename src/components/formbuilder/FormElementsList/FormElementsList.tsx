import { FormElements } from "@/types/FormBuilder";

import "./index.css";

type FormElementsListProps = {
  elementsList: FormElements[];
};

export const FormElementsList = ({ elementsList }: FormElementsListProps) => {
  return (
    <ul>
      {elementsList.map((element) => {
        return (
          <li key={element.name} className="form-elements-list__element">
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
  );
};
