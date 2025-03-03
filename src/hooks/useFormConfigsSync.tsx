import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { getFormConfigs, updateFormConfig } from "@/app/server/actions";
import {
  deleteFormConfig,
  getAllFormConfigs,
  initDB,
  STORE_NAME,
} from "@/lib/db/db";
import { setFormConfigs } from "@/store/slices/formConfigsSlice";
import { FormConfig } from "@/types/GenericForm";

type SyncStatus = "idle" | "syncing" | "offline" | "error" | "success";

export const useFormConfigsSync = () => {
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("idle");
  const syncInProgress = useRef(false);
  const dispatch = useDispatch();

  const triggerSync = useCallback(async () => {
    if (syncInProgress.current) return;
    if (!navigator.onLine) {
      setSyncStatus("offline");
      return;
    }

    syncInProgress.current = true;
    setSyncStatus("syncing");

    try {
      const db = await initDB();
      const localForms = await getAllFormConfigs();

      for (const form of localForms) {
        try {
          await updateFormConfig(form.id, form);
          await deleteFormConfig(form.id);
        } catch (error) {
          console.error(`Error in form sending  ${form.id}:`, error);
        }
      }

      const serverFormConfigs = await getFormConfigs();

      const tx = db.transaction(STORE_NAME, "readwrite");
      await tx.store.clear();

      for (const form of serverFormConfigs) {
        await tx.store.put(form as FormConfig);
      }

      await tx.done;

      dispatch(setFormConfigs(serverFormConfigs as FormConfig[]));
      setSyncStatus("success");
    } catch (error) {
      console.error("Sync error:", error);
      setSyncStatus("error");
    } finally {
      syncInProgress.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    const handleOnline = () => {
      console.log("Online - data sync");
      triggerSync();
    };

    const handleOffline = () => {
      console.log("Offline");
      setSyncStatus("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (navigator.onLine) {
      triggerSync();
    } else {
      setSyncStatus("offline");
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [triggerSync]);

  const syncForms = () => {
    if (!navigator.onLine) {
      setSyncStatus("offline");
      return;
    }
    triggerSync();
  };

  return { syncStatus, syncForms };
};
