import React, { memo } from "react";
import { DeleteIcon } from "@/assets/DeleteIcon";
import { EditIcon } from "@/assets/EditIcon";
import { useRouter } from "next/navigation";

import "./index.css";
import { deleteFormConfig } from "@/lib/db";

const FormsTableActions = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDeleteClick = () => {
    console.log(`Delete item with id: ${id}`);
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

      <div
        className="table-actions__delete"
        onClick={async () => {
          await deleteFormConfig(id);
          alert("Form deleted successfully");
        }}
      >
        <DeleteIcon size={24} color="var(--error)" />
      </div>
    </div>
  );
};

export default memo(FormsTableActions);
