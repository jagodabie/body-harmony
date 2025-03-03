import { useRouter } from "next/navigation";
import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { DeleteIcon } from "@/assets/DeleteIcon";
import { EditIcon } from "@/assets/EditIcon";
import { deleteFormConfigById } from "@/services/formConfigsService";

import "./index.css";

const FormsTableActions = ({ id }: { id: number }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleDeleteClick = async () => {
    const result = await deleteFormConfigById(id, dispatch);

    if (result.success) {
      alert("Form deleted successfully");
    } else {
      alert("Error while deleting form");
    }
  };

  return (
    <div className="table-actions">
      <div
        className="table-actions__edit"
        onClick={() => {
          router.push(`/form/${id}`);
        }}
      >
        <EditIcon size={24} color="var(--primary-main)" />
      </div>

      <div className="table-actions__delete" onClick={handleDeleteClick}>
        <DeleteIcon size={24} color="var(--error)" />
      </div>
    </div>
  );
};

export default memo(FormsTableActions);
