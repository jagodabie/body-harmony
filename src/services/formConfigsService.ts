import {
  deleteFormConfig as deleteFormConfigServer,
  getFormConfigById,
} from "@/app/server/actions";
import { updateFormConfig as updateFormServer } from "@/app/server/actions";
import {
  deleteFormConfig as deleteFormConfigDB,
  getFormConfig,
  updateFormConfig,
} from "@/lib/db/db";
import {
  deleteFormConfig,
  editFormConfig,
  setFormConfigs,
} from "@/store/slices/formConfigsSlice";
import { AppDispatch } from "@/store/store";
import { FormConfig } from "@/types/GenericForm";

export const deleteFormConfigById = async (
  id: number,
  dispatch: AppDispatch
) => {
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
};

export const updateFormById = async (
  updatedForm: FormConfig,
  dispatch: AppDispatch
) => {
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
};

export const getFormById = async (id: string, dispatch: AppDispatch) => {
  try {
    const localForm = await getFormConfig(id);
    let activeForm = localForm;

    if (!localForm) {
      console.warn("No local form found.");
    } else {
      dispatch(setFormConfigs([localForm]));
    }

    if (navigator.onLine) {
      const freshForm = (await getFormConfigById(id)) as FormConfig;

      if (freshForm) {
        const isFreshFormNewer =
          !localForm ||
          new Date(freshForm.updatedAt ?? 0).getTime() >
            new Date(localForm.updatedAt).getTime();

        if (isFreshFormNewer) {
          console.log("Newer form found on the backend. Updating...");
          await updateFormConfig(freshForm as FormConfig);
          dispatch(setFormConfigs([freshForm as FormConfig]));
          activeForm = freshForm;
        } else {
          console.log("Local form is up to date.");
        }
      } else {
        console.warn("Form not found on the backend.");
      }
    } else {
      console.log("Offline – using local data.");
    }

    if (!activeForm) {
      return { success: false, error: "Form not found." };
    }

    return { success: true, form: activeForm };
  } catch (error) {
    console.error("Error loading form:", error);
    return { success: false, error };
  }
};
