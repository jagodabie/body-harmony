"use client";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import { createFormConfig } from "@/app/server/actions";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addFormConfig } from "@/lib/db/db";
import { setFormEditorConfig } from "@/store/slices/formEditorSlice";
import { FormConfig } from "@/types/GenericForm";

import "./index.css";

export const FormWorkspaceHeader = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="form-table-header">
      <div className="form-table-header__create-form">
        <Button
          onClick={async () => {
            try {
              const response = (await createFormConfig()) as FormConfig;

              if (!response || !response.id) {
                throw new Error("Invalid response from API");
              }

              dispatch(
                setFormEditorConfig({
                  id: response.id,
                })
              );
              const newFormId = response.id;
              addFormConfig(response);
              router.push(`/form/${newFormId}`);
            } catch (error) {
              // TODO: Snackbar error handling error
              console.error(error);
              alert("Error while saving form");
            }
          }}
          startIcon={<CreateIcon />}
          variant="contained"
          color="primary"
        >
          Create Form
        </Button>
      </div>
      <div className="form-table-header__other-actions">
        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </div>
  );
};
