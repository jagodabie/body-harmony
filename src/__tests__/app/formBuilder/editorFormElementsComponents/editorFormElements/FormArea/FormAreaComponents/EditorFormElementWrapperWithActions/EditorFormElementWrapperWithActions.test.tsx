import { screen } from "@testing-library/react";
import { Control } from "react-hook-form";

import { EditorFormElementWrapperWithActions } from "@/app/form/[formId]/editorFormElementsComponents/FormArea/FormAreaComponents/EditorFormElementWrapperWithActions/EditorFormElementWrapperWithActions";

import { render } from "../../../../../../../../../custom-render";

describe("EditorFormElementWrapperWithActions", () => {
  it("EditorFormSelect renders correctly with given props.", () => {
    render(
      <EditorFormElementWrapperWithActions
        control={undefined as unknown as Control}
        element={{ name: "text", label: "text", type: "text" }}
        unregister={jest.fn()}
      />
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
    const deleteButton = screen.getByRole("button", { name: "delete" });
    expect(deleteButton).toBeInTheDocument();

    const settingsButton = screen.getByRole("button", { name: "settings" });
    expect(settingsButton).toBeInTheDocument();
  });
});
