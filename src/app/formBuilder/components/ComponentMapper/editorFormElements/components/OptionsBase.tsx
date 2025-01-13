import { useState } from "react";
import { Control } from "react-hook-form";

import { ControlledTextField } from "@/components/ui/ControlledTextField/ControlledTextField";

import "./index.css";

export const OptionsBase = ({
  control,
  name,
  shape,
  options,
  optionLabel,
  className,
}: {
  control: Control;
  name: string;
  shape?: boolean;
  options: string[];
  optionLabel: string;
  className?: string;
}) => {
  const [activatedItems, setActivatedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setActivatedItems((prev) => new Set(prev).add(key));
  };

  return (
    <ul className={`element-options ${className}`}>
      {options.map((key) => (
        <div key={`${key}-wrapper`} className="option-item-wrapper">
          {shape && (
            <div className="option-shape-wrapper">
              <div className={`option-shape ${className}`}></div>
            </div>
          )}
          <li
            key={key}
            onClick={() => toggleItem(key)}
            className={`option-item ${className}`}
          >
            {activatedItems.has(key) ? (
              <ControlledTextField
                controlledKey={`${name}-${key}`}
                name={`${name}-${key}`}
                control={control}
                placeholder={key.replace("option", `${optionLabel} `)}
              />
            ) : (
              key.replace("option", "Type option ")
            )}
          </li>
        </div>
      ))}
    </ul>
  );
};
