"use server";

import { FormConfig } from "@/types/GenericForm";

import { db } from "./db";

export async function getFormConfigs() {
  return (await db.form.findMany()).map((formConfig) => ({
    ...formConfig,
    createdAt: formConfig.createdAt?.toString(),
    updatedAt: formConfig.updatedAt?.toString(),
  }));
}

export async function getFormConfigById(id: string) {
  const formConfig = await db.form.findUnique({
    where: { id },
  });

  if (!formConfig) return null;

  return {
    ...formConfig,
    createdAt: formConfig.createdAt?.toString(),
    updatedAt: formConfig.updatedAt?.toString(),
  };
}

export async function createFormConfig(formConfig?: FormConfig) {
  const createdForm = await db.form.create({
    data: {
      ...formConfig,
      isSynced: true,
      fieldConfig: { create: [] },
    },
  });

  return {
    ...createdForm,
    createdAt: createdForm.createdAt?.toString(),
    updatedAt: createdForm.updatedAt?.toString(),
  };
}

export async function updateFormConfig(id: string, formConfig: FormConfig) {
  const updatedForm = await db.form.update({
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

  return {
    ...updatedForm,
    createdAt: updatedForm.createdAt?.toString(),
    updatedAt: updatedForm.updatedAt?.toString(),
  };
}

export async function deleteFormConfig(id: number) {
  const deletedForm = await db.form.delete({
    where: { id: id.toString() },
  });

  return {
    ...deletedForm,
    createdAt: deletedForm.createdAt?.toString(),
    updatedAt: deletedForm.updatedAt?.toString(),
  };
}
