import { screen } from "@testing-library/react";

import { EditorFormElementActions } from "@/app/form/[formId]/editorFormElementsComponents/FormArea/FormAreaComponents/EditorFormElementActions/EditorFormElementActions";

import { render } from "../../../../../../../../../custom-render";

describe("EditorFormElementActions", () => {
  it("Renders correctly with provided props.", () => {
    render(<EditorFormElementActions unregister={jest.fn()} id="1" />);
    const deleteButton = screen.getByRole("button", { name: "delete" });
    expect(deleteButton).toBeInTheDocument();

    const settingsButton = screen.getByRole("button", { name: "settings" });
    expect(settingsButton).toBeInTheDocument();
  });
});
