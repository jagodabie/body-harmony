import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getFormConfigs } from "@/app/server/actions";
import { initDB, STORE_NAME } from "@/lib/db/db";
import { setFormConfigs, setLoading } from "@/store/slices/formConfigsSlice";
import { FormConfig } from "@/types/GenericForm";

export const useSyncOnMount = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sync = async () => {
      if (!navigator.onLine) return;
      dispatch(setLoading(true));

      try {
        const serverFormConfigs = await getFormConfigs();
        const db = await initDB();
        const tx = db.transaction(STORE_NAME, "readwrite");

        await tx.store.clear();
        for (const formConfig of serverFormConfigs) {
          await tx.store.put(formConfig as FormConfig);
        }
        await tx.done;
        dispatch(setFormConfigs(serverFormConfigs as FormConfig[]));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.error("Error syncing forms on mount:", error);
      }
    };

    sync();
  }, [dispatch]);
};
