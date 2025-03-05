import { useFormContext } from "react-hook-form";

import { DeleteIcon } from "@/assets/DeleteIcon";
import { SettingsIcon } from "@/assets/SettingsIcon";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { deleteSelectedFormField } from "@/store/slices/formEditorSlice";
import { createLabelsListToUnregister } from "@/utils";

import { ActionButton } from "./ActionButton/ActionButton";
import "./index.css";

export type EditorFormElementActionsProps = {
  id: string;
};

export const EditorFormElementActions = ({
  id,
}: EditorFormElementActionsProps) => {
  const dispatch = useAppDispatch();
  const { unregister } = useFormContext();

  return (
    <div className="editor-form-element-actions">
      <ActionButton
        key={`${id}-delete`}
        actionId="delete"
        tooltipText="Delete"
        onClick={async () => {
          await dispatch(deleteSelectedFormField(id));
          createLabelsListToUnregister(id).forEach((name) => unregister(name));
        }}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
      <ActionButton
        key={`${id}-settings`}
        actionId="settings"
        tooltipText="settings"
        onClick={() => console.log("settings", id)}
        IconComponent={SettingsIcon}
        bgColor="var(--text-primary)"
      />
    </div>
  );
};
