import { Control } from "react-hook-form";

import { EditableControlledTextField } from "@/components/ui/EditableControlledTextField/EditableControlledTextField";

import "./index.css";

export const OptionsBase = ({
  control,
  shape = false,
  options,
  optionLabel,
  className = "",
}: {
  control: Control;
  name: string;
  shape?: boolean;
  options: string[];
  optionLabel: string;
  className?: string;
}) => {
  return (
    <ul className={`element-options ${className}`}>
      {options.map((key, index) => (
        <li key={`option-${key}-${index}`} className="option-item-wrapper">
          {shape && (
            <div className="option-shape-wrapper" data-testid="option-shape">
              <div className={`option-shape ${className || ""}`}></div>
            </div>
          )}

          <EditableControlledTextField
            controlledKey={`${key}-${index}`}
            name={`${key}-${index}`}
            control={control}
            placeholder={key.replace("option", `${optionLabel} `)}
            readOnly={false}
            customStyles={{
              ".MuiInput-root::before": {
                content: '""',
                border: "none",
              },
              "& .MuiInputBase-input": {
                fontSize: "1rem",
                "&::placeholder": {
                  color: "gray",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--font-size)",
                },
              },
            }}
            className="option-item"
            readFieldClass="option-item"
          />
        </li>
      ))}
    </ul>
  );
};
