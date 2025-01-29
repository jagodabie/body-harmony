import { fireEvent, screen } from "@testing-library/react";

import {
  ComponentMapper,
  ComponentMapperProps,
} from "@/app/userRegistration/userRegistrationComponents/ComponentMapper";

import { render } from "../../../../custom-render";

describe("ComponentMapper", () => {
  const renderComponent = (props: Partial<ComponentMapperProps> = {}) =>
    render(
      <ComponentMapper
        type="text"
        name="testField"
        label="Test Label"
        value=""
        onChange={jest.fn()}
        {...props}
      />
    );

  it("Renders a text input when type is 'text'.", () => {
    renderComponent({ type: "text" });

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("Renders a number input when type is 'number'.", () => {
    renderComponent({ type: "number" });

    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  it("Renders a multiline text input when type is 'multiline'.", () => {
    renderComponent({
      type: "multiline",
      multiline: true,
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Renders a select dropdown when type is 'select'.", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];
    renderComponent({
      type: "select",
      options,
      value: "option1",
    });

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    fireEvent.mouseDown(select);
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("Renders a checkbox when type is 'checkbox'.", () => {
    renderComponent({ type: "checkbox", value: true });

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it("Renders radio buttons when type is 'radio'.", () => {
    const radiosValues = ["Option 1", "Option 2"];
    renderComponent({ type: "radio", radiosValues });

    radiosValues.forEach((value) => {
      const radio = screen.getByLabelText(value);
      expect(radio).toBeInTheDocument();
    });
  });

  it("Renders an email input when type is 'email'.", () => {
    renderComponent({ type: "email", value: "test@example.com" });

    const input = screen.getByLabelText("Test Label");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveValue("test@example.com");
  });

  it("Renders a fallback text when the type is not recognized.", () => {
    renderComponent({ type: "", name: "Fallback Name" });

    const fallbackText = screen.getByLabelText("Fallback Name");
    expect(fallbackText).toBeInTheDocument();
    expect(fallbackText).toHaveTextContent("Fallback Name");
  });

  it("Calls onChange when input value changes.", () => {
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });

    const input = screen.getByLabelText("Test Label");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything());
  });
});
