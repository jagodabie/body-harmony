import { fireEvent, screen } from "@testing-library/react";
import { act } from "react";
import { Control } from "react-hook-form";

import { EditableControlledTextField } from "@/components/ui/EditableControlledTextField/EditableControlledTextField";

import { render } from "../../../../custom-render";

describe("EditableControlledTextField", () => {
  it("should render correctly in read-only mode", () => {
    render(
      <EditableControlledTextField
        control={undefined as unknown as Control}
        controlledKey="testKey"
        name="testName"
        placeholder="Test Placeholder"
        readOnly={true}
      />,
      {
        formDefaultValues: {
          testName: "Default Value",
        },
      }
    );

    const readOnlyElement = screen.getByText("Default Value");
    expect(readOnlyElement).toBeInTheDocument();
    expect(readOnlyElement).toHaveAttribute("role", "button");
  });

  it("should switch to edit mode on click", () => {
    render(
      <EditableControlledTextField
        control={undefined as unknown as Control}
        controlledKey="testKey"
        name="testName"
        placeholder="Test Placeholder"
        readOnly={false}
      />,
      {
        formDefaultValues: {
          testName: "Default Value",
        },
      }
    );

    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    expect(inputElement).toBeInTheDocument();
  });

  it("should retain updated value after blur", async () => {
    render(
      <EditableControlledTextField
        control={undefined as unknown as Control}
        controlledKey="testKey"
        name="testName"
        placeholder="Test Placeholder"
      />,
      {
        formDefaultValues: {
          testName: "Default Value",
        },
      }
    );

    const readOnlyElementInit = screen.getByRole("button");

    await act(() => {
      fireEvent.click(readOnlyElementInit);
    });

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Updated Value" } });
    fireEvent.blur(inputElement);

    const readOnlyElement = screen.getByText("Updated Value");
    expect(readOnlyElement).toBeInTheDocument();
  });
});
