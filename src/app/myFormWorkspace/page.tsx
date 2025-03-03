"use client";

import { FormsTable } from "@/components/FormsTable/FormsTable";
import { useSyncOnMount } from "@/hooks/useSyncOnMount";

import { FormWorkspaceHeader } from "./FormWorkspaceHeader/FormWorkspaceHeader";
import "./index.css";

//TODO: Only desktop version
// TODO: Icon Button
const MyFormWorkspace = () => {
  useSyncOnMount();
  return (
    <div className="form-workspace">
      <FormWorkspaceHeader />
      <FormsTable />
    </div>
  );
};

export default MyFormWorkspace;
