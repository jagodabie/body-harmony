import { screen } from "@testing-library/react";
import { Control } from "react-hook-form";

import { OptionsBase } from "@/app/formBuilder/editorFormElementsComponents/ElementMapper/editorFormElements/editorFormElementsComponents/OptionsBase";

import { render } from "../../../../../../../../../custom-render";

describe("OptionsBase", () => {
  it("OptionsBase should render correctly.", () => {
    render(
      <OptionsBase
        control={undefined as unknown as Control}
        name="test"
        options={["option1", "option2"]}
        optionLabel="option"
      />
    );

    const optionList = screen.getByRole("list");
    const selectOptions = screen.getAllByRole("listitem");
    const optionShapes = screen.queryAllByTestId("option-shape");

    expect(optionList).toBeInTheDocument();
    expect(selectOptions).toHaveLength(2);
    expect(optionShapes).toHaveLength(0);
  });

  it("Option list has proper class when className is passed.", () => {
    render(
      <OptionsBase
        control={undefined as unknown as Control}
        name="test"
        options={["option1", "option2"]}
        optionLabel="option"
        className="test"
      />
    );
    const optionList = screen.getByRole("list");
    expect(optionList).toHaveClass("test");
  });

  it("Option list has proper class when shape is passed.", () => {
    render(
      <OptionsBase
        control={undefined as unknown as Control}
        name="test"
        options={["option1", "option2"]}
        optionLabel="option"
        className="test"
        shape
      />
    );
    const optionShapes = screen.queryAllByTestId("option-shape");
    expect(optionShapes).toHaveLength(2);
  });
});
