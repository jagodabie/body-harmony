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

import { FieldType, Option } from "@/types/GenericFrom";

type ComponentMapperProps = {
  type?: FieldType;
  value?: unknown;
  name?: string;
  label?: string;
  variant?: TextFieldVariants;
  // TODO : check if this is the right type
  onChange?: (...event: unknown[]) => void;
  radiosValues?: string[];
  options?: Option[];
  multiline?: boolean;
};

const ComponentMapper = ({
  type,
  value,
  name,
  label,
  variant,
  onChange,
  radiosValues,
  options,
  multiline,
}: ComponentMapperProps) => {
  switch (type) {
    case "number":
      return (
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          label={label}
          variant={variant}
          inputProps={{
            min: 0,
          }}
        />
      );
    case "text":
      return (
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          name={name}
          label={label}
          variant={variant}
          multiline={multiline}
        />
      );
    case "select":
      // TODO: manage display label based on value like foundName
      return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            name={name}
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
      );
    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox checked={!!value} onChange={onChange} name={name} />
          }
          label={label}
        />
      );
    case "radio":
      return (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup name={name}>
            {radiosValues?.map((radioValue) => (
              <FormControlLabel
                key={radioValue}
                value={radioValue}
                control={<Radio />}
                label={radioValue}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case "email":
      return (
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          name={name}
          label={label}
          variant={variant}
        />
      );
    default:
      return <p aria-label={name}>{name}</p>;
  }
};
export default ComponentMapper;
