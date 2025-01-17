import { CheckboxIcon } from "@/assets/inputsIcons/CheckboxIcon";
import { EmailIcon } from "@/assets/inputsIcons/EmailIcon";
import { LongTextIcon } from "@/assets/inputsIcons/LongTextIcon";
import { NumberIcon } from "@/assets/inputsIcons/NumberIcon";
import { RadioIcon } from "@/assets/inputsIcons/RadioIcon";
import { SelectIcon } from "@/assets/inputsIcons/SelectIcon";
import { ShortTextIcon } from "@/assets/inputsIcons/ShortTextIcon";
import { TitleIcon } from "@/assets/inputsIcons/TitleIcon";
import { FormElements } from "@/types/FormBuilder";

export const elementsList: FormElements[] = [
  {
    name: "Title",
    type: "title",
    icon: <TitleIcon />,
  },
  {
    name: "Text Field",
    type: "text",
    icon: <ShortTextIcon />,
  },
  {
    name: "Long Text Field",
    type: "multiline",
    icon: <LongTextIcon />,
  },

  {
    name: "Number Field",
    type: "number",
    icon: <NumberIcon />,
  },
  {
    name: "Select Field",
    type: "select",
    icon: <SelectIcon />,
  },
  {
    name: "Checkbox Field",
    type: "checkbox",
    icon: <CheckboxIcon />,
  },
  {
    name: "Radio Field",
    type: "radio",
    icon: <RadioIcon />,
  },
  {
    name: "Email Field",
    type: "email",
    icon: <EmailIcon />,
  },
];
