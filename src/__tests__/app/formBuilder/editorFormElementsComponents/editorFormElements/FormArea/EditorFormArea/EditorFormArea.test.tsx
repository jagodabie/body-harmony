import { screen } from "@testing-library/react";

import { EditorFormArea } from "@/app/form/[formId]/editorFormElementsComponents/FormArea/EditorFormArea/EditorFormArea";

import { render } from "../../../../../../../../custom-render";

const preloadedState = {
  app: {
    theme: "light",
  },
  formEditor: {
    editingElement: "",
    selectedFormFields: [{ name: "test-element", type: "text", label: "" }],
    formElementsCount: { text: 1 },
  },
};

describe("EditorFromArea", () => {
  it("Component with given selectedFields renders correctly.", () => {
    render(<EditorFormArea />, {
      preloadedState,
    });

    const form = screen.getByRole("form");
    const formHeader = screen.getByRole("header");
    const formFooter = screen.getByRole("footer");
    const submitButton = screen.getByRole("button", {
      name: "Confirm Form configuration",
    });

    expect(form).toBeInTheDocument();
    expect(formHeader).toBeInTheDocument();
    expect(formFooter).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Component with no selectedFields renders correctly.", () => {
    const preloadedState = {
      app: {
        theme: "light",
      },
      formEditor: {
        editingElement: "",
        selectedFormFields: [],
        formElementsCount: {},
      },
    };

    render(<EditorFormArea />, {
      preloadedState,
    });

    const form = screen.getByRole("form");
    const formHeader = screen.getByRole("header");
    const formFooter = screen.queryByRole("footer");
    const submitButton = screen.queryByRole("button", {
      name: "Confirm Form configuration",
    });

    expect(form).toBeInTheDocument();
    expect(formHeader).toBeInTheDocument();
    expect(formFooter).toBeNull();
    expect(submitButton).toBeNull();
  });
});
