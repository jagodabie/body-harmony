import { deleteFormConfig as deleteFormConfigServer } from "@/app/server/actions";
import { updateFormConfig as updateFormServer } from "@/app/server/actions";
import {
  deleteFormConfig as deleteFormConfigDB,
  updateFormConfig,
} from "@/lib/db/db";
import {
  deleteFormConfig,
  editFormConfig,
} from "@/store/slices/formConfigsSlice";
import { AppDispatch } from "@/store/store";
import { FormConfig } from "@/types/GenericForm";

export async function deleteFormConfigById(id: number, dispatch: AppDispatch) {
  try {
    await deleteFormConfigDB(id);

    dispatch(deleteFormConfig(id));

    if (navigator.onLine) {
      await deleteFormConfigServer(id);
    } else {
      console.warn("Offline – form will be deleted from server when online");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting form:", error);
    return { success: false, error };
  }
}

export async function updateFormById(
  updatedForm: FormConfig,
  dispatch: AppDispatch
) {
  try {
    await updateFormConfig(updatedForm);

    dispatch(editFormConfig(updatedForm));

    if (navigator.onLine) {
      await updateFormServer(updatedForm.id!.toString(), updatedForm);
    } else {
      console.warn("Offline – change saved only locally, for synchronization.");
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating form:", error);
    return { success: false, error };
  }
}
