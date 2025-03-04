import { openDB } from "idb";

import { updateFormConfig as updateFormConfigServer } from "@/app/server/actions";
import { FormConfig } from "@/types/GenericForm";

export const DB_NAME = "BodyHarmonyDB";
export const STORE_NAME = "formConfigs";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function addFormConfig(formConfig?: FormConfig) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const id = await tx.store.add(formConfig);
  await tx.done;
  return id;
}

export async function getFormConfig(id: string) {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
}

export async function getAllFormConfigs() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

export async function deleteFormConfig(id: number) {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
}

export async function updateFormConfig(updatedConfig: FormConfig) {
  console.log("Updating form config", updatedConfig);

  const db = await initDB();
  const existingConfig = await db.get(STORE_NAME, updatedConfig.id!);

  console.log(existingConfig, "EXISTING CONFIG");
  if (!existingConfig) {
    throw new Error(`Form config with ID ${updatedConfig?.id} not found`);
  }

  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.put(updatedConfig);
  await tx.done;
}

export async function syncFormsConfigs() {
  const forms = await getAllFormConfigs();

  for (const form of forms) {
    try {
      alert(`${form.id} - Syncing form`);
      await updateFormConfigServer(form.id, form);
    } catch (error) {
      console.error(`Error syncing form ${form.id}:`, error);
      alert(`${form.id} - Error while syncing form`);
    }
  }
}

export async function syncWhenOnline() {
  if (navigator.onLine) {
    console.log("Online! Synchronizing data...");
    await syncFormsConfigs();
  }
}
