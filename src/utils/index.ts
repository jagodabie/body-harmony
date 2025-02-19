import { FieldConfig, FieldType, Option } from "@/types/GenericForm";

// TODO: label zamiast pytania idzie
export const mapDataToConfigFields = (data: Record<string, string>) => {
  const groupedElements: Record<string, FieldConfig[]> = {};
  const optionsMap: Record<string, Option[]> = {};
  let baseName = "";
  Object.keys(data).forEach((key) => {
    if (key.endsWith("-label") || key.endsWith("-question")) {
      const baseName = key.replace(/-(label|question)$/, "");
      const suffix = key.endsWith("-label") ? "label" : "question";
      const type: FieldType =
        suffix === "label" ? (baseName.split("-")[0] as FieldType) : "";

      if (!groupedElements[baseName]) {
        groupedElements[baseName] = [];
      }

      groupedElements[baseName].push({
        type,
        label: data[key],
        name: key,
      });
    }

    const optionMatch = key.match(/^(.+)-option(\d+)$/);
    if (optionMatch) {
      baseName = optionMatch[1];

      if (!optionsMap[baseName]) {
        optionsMap[baseName] = [];
      }
      optionsMap[baseName].push({
        value: key.split("-")[2],
        label: data[key],
      });
    }
  });

  const sortedElements = Object.values(groupedElements).flatMap((group) =>
    group.sort((a) => (a.name.endsWith("-question") ? -1 : 1))
  );

  return sortedElements.map((field) => {
    if (
      ["radio", "checkbox", "select"].includes(field.type!) &&
      optionsMap[baseName]
    ) {
      return { ...field, options: optionsMap[baseName] };
    }
    return field;
  });
};

export const createLabelsListToUnregister = (elementName: string): string[] => {
  const baseFields = [`${elementName}-label`, `${elementName}-question`];

  if (
    ["radio", "checkbox", "select"].some((type) => elementName.startsWith(type))
  ) {
    return [
      ...baseFields,
      `${elementName}-option1`,
      `${elementName}-option2`,
      `${elementName}-option3`,
      `${elementName}-option4`,
    ];
  }

  return baseFields;
};
