import { fireEvent, screen } from "@testing-library/react";

import { ActionButton } from "@/app/form/[formId]/editorFormElementsComponents/FormArea/FormAreaComponents/EditorFormElementActions/ActionButton/ActionButton";
import { DeleteIcon } from "@/assets/DeleteIcon";
import { SettingsIcon } from "@/assets/SettingsIcon";

import { render } from "../../../../../../../../../../custom-render";

describe("ActionButton Component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("Renders correctly with provided props.", () => {
    render(
      <ActionButton
        actionId="delete"
        tooltipText="Delete"
        onClick={mockOnClick}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
    );

    const deleteButton = screen.getByRole("button", { name: "delete" });
    expect(deleteButton).toBeInTheDocument();
  });

  it("Renders the IconComponent correctly given delete icon.", () => {
    render(
      <ActionButton
        actionId="delete"
        tooltipText="Delete"
        onClick={mockOnClick}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
    );

    const deleteIcon = screen.getByTestId("delete-icon");
    expect(deleteIcon).toBeInTheDocument();
  });

  it("Renders the IconComponent correctly given SettingsIcon.", () => {
    render(
      <ActionButton
        actionId="edit"
        tooltipText="Edit"
        onClick={mockOnClick}
        IconComponent={SettingsIcon}
        bgColor="var(--text-primary)"
      />
    );

    const settingsIcon = screen.getByTestId("settings-icon");
    expect(settingsIcon).toBeInTheDocument();
  });

  it("Triggers onClick when clicked.", () => {
    render(
      <ActionButton
        actionId="delete"
        tooltipText="Delete"
        onClick={mockOnClick}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
    );

    const deleteButton = screen.getByRole("button", { name: "delete" });
    fireEvent.click(deleteButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Shows tooltip on hover.", () => {
    render(
      <ActionButton
        actionId="delete"
        tooltipText="Delete"
        onClick={mockOnClick}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
    );

    const buttonDelete = screen.getByRole("button");

    fireEvent.mouseEnter(buttonDelete);

    const tooltip = screen.getByText("Delete");
    expect(tooltip).toBeInTheDocument();
  });

  it("Hides tooltip when not hovered.", () => {
    render(
      <ActionButton
        actionId="delete"
        tooltipText="Delete"
        onClick={mockOnClick}
        IconComponent={DeleteIcon}
        bgColor="var(--error)"
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.mouseEnter(deleteButton);

    const tooltip = screen.getByText("Delete");
    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseLeave(deleteButton);
    expect(tooltip).not.toBeVisible();
  });
});
