import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ComponentMapper } from "@/app/userRegistration/userRegistrationComponents/ComponentMapper";
import { GenericForm } from "@/components/form/GenericForm/GenericForm";
import { FormConfig } from "@/types/GenericForm";

const formConfig: FormConfig = {
  fieldConfig: [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "age",
      type: "number",
      label: "Age",
    },
  ],
  saveButtonLabel: "Save",
};

describe("GenericForm", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Renders the form with all required elements.", () => {
    render(
      <GenericForm
        formConfig={formConfig}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const formElement = screen.getByRole("form");
    const saveButton = screen.getByRole("button", { name: "Save form" });
    const cancelButton = screen.getByRole("button", { name: "Cancel form" });
    const fieldsSection = screen.getByTestId("form-grid");

    expect(formElement).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(fieldsSection).toBeInTheDocument();
  });

  it("Applies correct form width when formWidth is set to 50%.", () => {
    render(
      <GenericForm
        formConfig={{ ...formConfig, formWidth: "50%" }}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const formElement = screen.getByRole("form");
    expect(formElement).toHaveStyle("width: 50%");
  });

  it("Applies correct form width when formWidth is set to 10%.", () => {
    render(
      <GenericForm
        formConfig={{ ...formConfig, formWidth: "10%" }}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const formElement10 = screen.getByRole("form");
    expect(formElement10).toHaveStyle("width: 10%");
  });

  it("Defaults to 100% width when formWidth is not provided.", () => {
    render(
      <GenericForm
        formConfig={formConfig}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const formElement = screen.getByRole("form");
    expect(formElement).toHaveStyle("width: 100%");
  });

  it("Calls window.history.back() after clicking cancel button and confirming.", async () => {
    window.history.back = jest.fn();
    window.confirm = jest.fn(() => true);

    render(
      <GenericForm
        formConfig={formConfig}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const cancelButton = screen.getByRole("button", { name: "Cancel form" });
    await userEvent.click(cancelButton);

    expect(window.confirm).toHaveBeenCalled();
    expect(window.history.back).toHaveBeenCalledTimes(1);
  });

  it("Does not call window.history.back() if cancel is not confirmed.", async () => {
    window.history.back = jest.fn();
    window.confirm = jest.fn(() => false);

    render(
      <GenericForm
        formConfig={formConfig}
        onSubmit={jest.fn()}
        componentMapper={ComponentMapper}
      />
    );

    const cancelButton = screen.getByRole("button", { name: "Cancel form" });
    await userEvent.click(cancelButton);

    expect(window.confirm).toHaveBeenCalled();
    expect(window.history.back).not.toHaveBeenCalled();
  });
});
