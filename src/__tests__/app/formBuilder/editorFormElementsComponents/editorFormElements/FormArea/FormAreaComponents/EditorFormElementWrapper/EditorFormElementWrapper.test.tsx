import { screen } from "@testing-library/react";
import { Control } from "react-hook-form";

import { EditorFormElementWrapper } from "@/app/form/[formId]/editorFormElementsComponents/FormArea/FormAreaComponents/EditorFormElementWrapper/EditorFormElementWrapper";
import { FieldConfig } from "@/types/GenericForm";

import { render } from "../../../../../../../../../custom-render";

const preloadedState = {
  app: {
    theme: "dark",
  },
  formEditor: {
    editingElement: "",
    selectedFormFields: [{ name: "test-element", type: "text", label: "" }],
    formElementsCount: { text: 1 },
  },
};

describe("EditorFormElementWrapper", () => {
  it("Component renders two input when give type is different then title.", () => {
    const element: FieldConfig = {
      type: "text",
      name: "test-element",
      label: "",
    };

    render(
      <EditorFormElementWrapper
        control={undefined as unknown as Control}
        element={element}
      />,
      {
        preloadedState,
      }
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
  });

  it("Component renders one input when give type is equal then title.", () => {
    const element: FieldConfig = {
      type: "title",
      name: "test-element",
      label: "",
    };

    const preloadedState = {
      formEditor: {
        editingElement: "",
        selectedFormFields: [],
        formElementsCount: {},
      },
    };

    render(
      <EditorFormElementWrapper
        control={undefined as unknown as Control}
        element={element}
      />,
      {
        preloadedState,
      }
    );

    const input = screen.getByRole("textbox");
    expect(input);
  });
});
