"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { ReactElement } from "react";

import { EditorFormElementType, FieldType, Option } from "@/types/GenericForm";

export type ComponentMapperProps = {
  type?: EditorFormElementType;
  value?: unknown;
  name?: string;
  label?: string;
  variant?: TextFieldVariants;
  onChange?: (...event: unknown[]) => void;
  radiosValues?: string[];
  options?: Option[];
  multiline?: boolean;
};

export const ComponentMapper = ({
  type,
  value,
  name,
  label,
  variant,
  onChange,
  options,
  multiline,
}: ComponentMapperProps) => {
  const componentMap: Record<string, ReactElement> = {
    number: (
      <TextField
        value={value}
        type="number"
        onChange={onChange}
        label={label}
        variant={variant}
        fullWidth
        inputProps={{ min: 0 }}
      />
    ),

    text: (
      <TextField
        value={value}
        type="text"
        fullWidth
        onChange={onChange}
        name={name}
        label={label}
        variant={variant}
        multiline={multiline}
      />
    ),
    multiline: (
      <TextField
        value={value}
        type="text"
        fullWidth
        onChange={onChange}
        name={name}
        label={label}
        variant={variant}
        multiline
      />
    ),
    select: (
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={options?.some((option) => option.value === value) ? value : ""}
          onChange={onChange}
          name={name}
          fullWidth
          variant={variant}
          label="Selected"
        >
          <MenuItem key="" value="">
            None
          </MenuItem>
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ),
    checkbox: (
      <>
        {options?.map(({ value: optionValue, label }, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={
                  Array.isArray(value) ? value.includes(optionValue) : false
                }
                onChange={(event) => {
                  const newValue = event.target.checked
                    ? [...(Array.isArray(value) ? value : []), optionValue]
                    : Array.isArray(value)
                    ? value.filter((v) => v !== optionValue)
                    : [];

                  onChange?.(newValue);
                }}
                name={name}
              />
            }
            label={label}
          />
        ))}
      </>
    ),
    radio: (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup name={name}>
          {options?.map((radioOption) => (
            <FormControlLabel
              key={radioOption.value}
              value={radioOption.value}
              control={<Radio />}
              label={radioOption.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    ),
    email: (
      <TextField
        value={value}
        type="email"
        onChange={onChange}
        name={name}
        fullWidth
        label={label}
        variant={variant}
      />
    ),
  };

  return (
    componentMap[type as FieldType] || (
      <p className="title-field" aria-label={name}>
        {label || name}
      </p>
    )
  );
};
