"use client";
import { IconButton } from "@mui/material";
import { useState } from "react";

type ActionButtonProps = {
  actionId: string;
  tooltipText: string;
  onClick: () => void;
  IconComponent: React.FC;
  bgColor: string;
};

export const ActionButton = ({
  actionId,
  tooltipText,
  onClick,
  IconComponent,
  bgColor,
}: ActionButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`editor-form-element-actions__${actionId}`}
      onClick={onClick}
    >
      <IconButton
        aria-label={actionId}
        disableFocusRipple
        sx={{
          backgroundColor: bgColor,
          color: "var(--background-default)",
          "&:hover": {
            backgroundColor: bgColor,
            color: "var(--background-default)",
          },
        }}
      >
        <IconComponent />
      </IconButton>
      {hovered && (
        <div className={`editor-form-element-actions__${actionId}__tooltip`}>
          {tooltipText}
        </div>
      )}
    </div>
  );
};
