import { screen } from "@testing-library/react";
import { Control } from "react-hook-form";

import { EditorFormSelect } from "@/app/form/[formId]/editorFormElementsComponents/ElementMapper/editorFormElements/editorFormElementsComponents/EditorFormSelect/EditorFormSelect";

import { render } from "../../../../../../../../../../custom-render";

describe("EditorFormSelect", () => {
  it("EditorFormSelect renders correctly with given props.", () => {
    render(
      <EditorFormSelect control={undefined as unknown as Control} name="test" />
    );

    const selectLabel = screen.getByRole("button");
    const optionsBase = screen.queryByRole("list");

    expect(selectLabel).toBeInTheDocument();
    expect(optionsBase).not.toBeInTheDocument();
  });
});
