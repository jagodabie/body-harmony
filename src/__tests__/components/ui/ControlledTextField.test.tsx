import { fireEvent, screen } from "@testing-library/react";
import { Control } from "react-hook-form";

import { ControlledTextField } from "@/components/ui/ControlledTextField/ControlledTextField";

import { render } from "../../../../custom-render";

describe("ControlledTextField", () => {
  it("should render correctly with placeholder", () => {
    render(
      <ControlledTextField
        controlledKey="testKey"
        name="testField"
        control={undefined as unknown as Control}
        placeholder="Test Placeholder"
      />,
      {
        formDefaultValues: {
          testField: "",
        },
      }
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    expect(input).toBeInTheDocument();
  });

  it("should call onBlur when the input loses focus", () => {
    const onBlurMock = jest.fn();

    render(
      <ControlledTextField
        controlledKey="testKey"
        name="testField"
        control={undefined as unknown as Control}
        placeholder="Test Placeholder"
        onBlur={onBlurMock}
      />,
      {
        formDefaultValues: {
          testField: "",
        },
      }
    );

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it("should call onEnter when Enter key is pressed", () => {
    const onEnterMock = jest.fn();

    render(
      <ControlledTextField
        controlledKey="testKey"
        name="testField"
        control={undefined as unknown as Control}
        placeholder="Test Placeholder"
        onEnter={onEnterMock}
      />,
      {
        formDefaultValues: {
          testField: "",
        },
      }
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    expect(onEnterMock).toHaveBeenCalledTimes(1);
  });

  it("should update value onChange", () => {
    render(
      <ControlledTextField
        controlledKey="testKey"
        name="testField"
        control={undefined as unknown as Control}
        placeholder="Test Placeholder"
      />,
      {
        formDefaultValues: {
          testField: "",
        },
      }
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    fireEvent.change(input, { target: { value: "New Value" } });

    expect(input).toHaveValue("New Value");
  });
});
