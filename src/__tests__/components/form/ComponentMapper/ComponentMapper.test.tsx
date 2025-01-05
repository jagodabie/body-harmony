import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ComponentMapper from "@/components/form/ComponentMapper/ComponentMapper";

describe("ComponentMapper Component", () => {
  it("renders a number input when type is number", () => {
    render(
      <ComponentMapper type="number" name="nameTest" label="Test Label" />
    );
    const numberInput = screen.getByRole("spinbutton", { name: "Test Label" });
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveAttribute("type", "number");
  });

  it("renders a text input when type is text", () => {
    render(
      <ComponentMapper type="text" name="nameTest" label="Test Label" value />
    );

    const textInput = screen.getByRole("textbox", { name: "Test Label" });
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute("type", "text");
  });

  it("renders a select input when type is select", () => {
    render(
      <ComponentMapper
        type="select"
        name="nameTest"
        label="Test Label"
        value=""
      />
    );

    const selectInput = screen.getByText("Test Label");
    expect(selectInput).toBeInTheDocument();
  });
  it("renders a properly select with options when type is select and options are given", async () => {
    render(
      <ComponentMapper
        type="select"
        name="nameTest"
        label="Test Label"
        value={"option1"}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
      />
    );
    const dropdownButton = screen.getByRole("combobox");
    await userEvent.click(dropdownButton);

    const dropdownItem = await screen.findByRole("option", {
      name: "Option 1",
    });
    const dropdownItems = screen.getAllByRole("option");
    expect(dropdownItems).toHaveLength(4);

    expect(dropdownItem).toBeInTheDocument();
  });
  it("renders a properly select with options when type is select and options are not given", async () => {
    render(
      <ComponentMapper
        type="select"
        name="nameTest"
        label="Test Label"
        value={"option1"}
      />
    );
    const dropdownButton = screen.getByRole("combobox");
    await userEvent.click(dropdownButton);

    const dropdownItem = await screen.findByRole("option", {
      name: "None",
    });
    const dropdownItems = screen.getAllByRole("option");
    expect(dropdownItems).toHaveLength(1);

    expect(dropdownItem).toBeInTheDocument();
  });

  it("renders a checkbox input when type is checkbox", () => {
    render(
      <ComponentMapper type="checkbox" name="nameTest" label="Test Label" />
    );

    const checkboxInput = screen.getByRole("checkbox", { name: "Test Label" });
    expect(checkboxInput).toBeInTheDocument();
  });

  it("renders a radio input when type is radio", () => {
    render(<ComponentMapper type="radio" name="nameTest" label="Test Label" />);

    const radioInput = screen.getByText("Test Label");
    expect(radioInput).toBeInTheDocument();
  });

  it("renders a p element when type is empty", () => {
    render(<ComponentMapper name="nameTest" label="Test Label" />);
    const pElement = screen.getByLabelText("nameTest");
    expect(pElement).toBeInTheDocument();
  });
});
