import { createLabelsListToUnregister, mapDataToConfigFields } from "@/utils";

describe("createLabelsListToUnregister", () => {
  it("should return label and question for regular fields", () => {
    expect(createLabelsListToUnregister("text-1")).toEqual([
      "text-1-label",
      "text-1-question",
    ]);

    expect(createLabelsListToUnregister("email-1")).toEqual([
      "email-1-label",
      "email-1-question",
    ]);

    expect(createLabelsListToUnregister("number-1")).toEqual([
      "number-1-label",
      "number-1-question",
    ]);
  });

  it("should return label, question, and options for checkbox", () => {
    expect(createLabelsListToUnregister("checkbox-1")).toEqual([
      "checkbox-1-label",
      "checkbox-1-question",
      "checkbox-1-option1",
      "checkbox-1-option2",
      "checkbox-1-option3",
      "checkbox-1-option4",
    ]);
  });

  it("should return label, question, and options for radio", () => {
    expect(createLabelsListToUnregister("radio-1")).toEqual([
      "radio-1-label",
      "radio-1-question",
      "radio-1-option1",
      "radio-1-option2",
      "radio-1-option3",
      "radio-1-option4",
    ]);
  });

  it("should return label, question, and options for select", () => {
    expect(createLabelsListToUnregister("select-1")).toEqual([
      "select-1-label",
      "select-1-question",
      "select-1-option1",
      "select-1-option2",
      "select-1-option3",
      "select-1-option4",
    ]);
  });

  it("should work for dynamically named elements", () => {
    expect(createLabelsListToUnregister("custom-field")).toEqual([
      "custom-field-label",
      "custom-field-question",
    ]);
  });
});

describe("mapDataToConfigFields", () => {
  it("should return an array of FieldConfig objects", () => {
    const data: Record<string, string> = {
      formTitle: "Test Form",
      "text-1-label": "Text Field",
      "text-1-question": "What is your name?",
      "email-1-label": "Email Field",
      "email-1-question": "What is your email?",
      "number-1-label": "Number Field",
      "number-1-question": "How old are you?",
      "radio-1-label": "Radio Field",
      "radio-1-question": "Choose one option",
      "radio-1-option1": "Option 1",
      "radio-1-option2": "Option 2",
      "radio-1-option3": "Option 3",
      "radio-1-option4": "Option 4",
      "checkbox-1-label": "Checkbox Field",
      "checkbox-1-question": "Choose multiple options",
      "checkbox-1-option1": "Option 1",
      "checkbox-1-option2": "Option 2",
      "checkbox-1-option3": "Option 3",
      "checkbox-1-option4": "Option 4",
      "checkbox-2-label": "Checkbox Field 2",
      "checkbox-2-question": "Choose multiple options",
      "checkbox-2-option1": "Option 1",
      "checkbox-2-option2": "Option 2",
      "checkbox-2-option3": "Option 3",
      "checkbox-2-option4": "Option 4",
      "select-1-label": "Select Field",
      "select-1-question": "Choose one option",
      "select-1-option1": "Option 1",
      "select-1-option2": "Option 2",
      "select-1-option3": "Option 3",
      "select-1-option4": "Option 4",
    };

    const expected = [
      { type: "", label: "What is your name?", name: "text-1-question" },
      { type: "text", label: "Text Field", name: "text-1-label" },
      { type: "", label: "What is your email?", name: "email-1-question" },
      { type: "email", label: "Email Field", name: "email-1-label" },
      { type: "", label: "How old are you?", name: "number-1-question" },
      { type: "number", label: "Number Field", name: "number-1-label" },
      { type: "", label: "Choose one option", name: "radio-1-question" },
      {
        type: "radio",
        label: "Radio Field",
        name: "radio-1-label",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ],
      },
      {
        type: "",
        label: "Choose multiple options",
        name: "checkbox-1-question",
      },
      {
        type: "checkbox",
        label: "Checkbox Field",
        name: "checkbox-1-label",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ],
      },
      {
        type: "",
        label: "Choose multiple options",
        name: "checkbox-2-question",
      },
      {
        type: "checkbox",
        label: "Checkbox Field 2",
        name: "checkbox-2-label",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ],
      },
      { type: "", label: "Choose one option", name: "select-1-question" },
      {
        type: "select",
        label: "Select Field",
        name: "select-1-label",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ],
      },
    ];

    expect(mapDataToConfigFields(data)).toEqual(expected);
  });
});
