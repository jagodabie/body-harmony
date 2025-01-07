import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

import "./index.css";

export const customStyles = {
  "& .MuiInputBase-root::after": {
    border: "none",
  },
  "& .MuiInputBase-root::before": {
    border: "none",
  },
  "&:hover .MuiInputBase-root::after": {
    border: "none",
  },
  "&:hover .MuiInputBase-root::before": {
    border: "none",
  },
  "& .MuiInputBase-root.Mui-focused": {
    borderBottom: " solid 2px var(--primary-main)",
  },
};

type EditorFormElementProps = {
  type: string;
  questionPlaceholder: string;
  elementLabel?: string;
};

export const EditorFormElement = ({
  type,
  questionPlaceholder,
  elementLabel,
}: EditorFormElementProps) => {
  const [question, setQuestion] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(elementLabel || "");

  return (
    <div className="editor-form-element">
      <div className="editor-form-element__header">
        <TextField
          // TODO: Add name dynamically
          name="standard-basic"
          variant="standard"
          placeholder={questionPlaceholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuestion(e.target.value)
          }
          value={question}
          sx={customStyles}
        />
      </div>
      <div className="editor-form-element__body">
        <TextField
          // TODO: Add name dynamically
          name="standard-basic"
          variant="standard"
          placeholder="Type placeholder"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPlaceholder(e.target.value)
          }
          value={placeholder}
          sx={customStyles}
        />
      </div>
    </div>
  );
};
