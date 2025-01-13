import { ReactElement } from "react";

import { EditorFormElementType } from "./GenericForm";

export interface FormElements {
  name: string;
  type: EditorFormElementType;
  icon: ReactElement;
}
