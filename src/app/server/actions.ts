"use server";

// import { create } from "domain"; // Removed unused import

import { FormConfig } from "@/types/GenericForm";

import { db } from "./db";

export async function getFormConfigs() {
  return (await db.form.findMany()).map((formConfig) => ({
    ...formConfig,
    createdAt: formConfig.createdAt?.toString(),
  }));
}

export async function createFormConfig(formConfig?: FormConfig) {
  return await db.form
    .create({
      data: {
        ...formConfig,
        isSynced: true,
        fieldConfig: { create: [] },
      },
    })
    .then((formConfig) => ({
      ...formConfig,
      createdAt: formConfig?.createdAt?.toString(),
    }));
}

export async function updateFormConfig(id: string, formConfig: FormConfig) {
  return await db.form.update({
    where: { id },
    data: {
      fieldConfig: {
        deleteMany: {},
        create:
          formConfig?.fieldConfig?.map((field) => ({
            name: field.name || "",
            type: field.type || "",
            label: field.label || "",
            variant: field.variant || "",
            multiline: field.multiline || false,
            xs: field.xs || 12,
            md: field.md || 6,
            options: field.options || [],
          })) || [],
      },
    },
  });
}

export async function deleteFormConfig(id: number) {
  return await db.form.delete({
    where: { id: id.toString() },
  });
}
