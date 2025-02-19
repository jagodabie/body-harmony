import { Control } from "react-hook-form";

import { ElementMapper } from "@/app/formBuilder/editorFormElementsComponents/ElementMapper/ElementMapper";

import { render } from "../../../../../../../custom-render";

describe("ElementMapper", () => {
  it("Renders multiline element.", () => {
    const { container } = render(
      <ElementMapper
        type="multiline"
        name="test"
        control={undefined as unknown as Control}
      />
    );

    expect(container.querySelector(".element.multiline")).toBeInTheDocument();
  });

  it("Renders number element.", () => {
    const { getByText } = render(
      <ElementMapper
        type="number"
        name="test"
        control={undefined as unknown as Control}
      />
    );

    expect(getByText("Type your number")).toBeInTheDocument();
  });

  it("Renders select element.", () => {
    const { container } = render(
      <ElementMapper
        type="select"
        name="select"
        control={undefined as unknown as Control}
      />
    );
    expect(container.querySelector(".element-select")).toBeInTheDocument();
  });

  it("Renders radio element.", () => {
    const { container } = render(
      <ElementMapper
        type="radio"
        name="radio-radio"
        control={undefined as unknown as Control}
      />
    );

    expect(container.querySelectorAll(".option-shape.radio")).toHaveLength(4);
  });

  it("Renders checkbox element.", () => {
    const { container } = render(
      <ElementMapper
        type="checkbox"
        name="checkbox-checkbox"
        control={undefined as unknown as Control}
      />
    );

    expect(container.querySelectorAll(".option-shape.checkbox")).toHaveLength(
      4
    );
  });

  it("Renders default element for unknown type.", () => {
    const { container } = render(
      <ElementMapper
        type=""
        name="test"
        control={undefined as unknown as Control}
      />
    );
    expect(container.querySelector(".element")).toBeInTheDocument();
  });
});
