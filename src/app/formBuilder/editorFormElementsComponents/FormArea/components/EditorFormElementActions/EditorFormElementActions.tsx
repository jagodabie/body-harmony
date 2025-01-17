import { DeleteIcon } from "@/assets/DeleteIcon";
import { SettingsIcon } from "@/assets/SettingsIcon";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { deleteSelectedFormField } from "@/store/slices/formEditorSlice";

import { ActionButton } from "./ActionButton/ActionButton";
import "./index.css";

export const EditorFormElementActions = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="editor-form-element-actions">
      <ActionButton
        key={`${id}-delete`}
        actionId="delete"
        tooltipText="Delete"
        onClick={() => dispatch(deleteSelectedFormField(id))}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
      <ActionButton
        key={`${id}-edit`}
        actionId="edit"
        tooltipText="Edit"
        onClick={() => console.log("settings", id)}
        IconComponent={SettingsIcon}
        bgColor="var(--text-primary)"
      />
    </div>
  );
};
