import { Control } from "react-hook-form";

import { ComponentMapper } from "@/app/formBuilder/editorFormElementsComponents/ElementMapper/ElementMapper";

import { render } from "../../../../../../custom-render";

describe("ComponentMapper", () => {
  const control = {} as Control;

  it("renders multiline element", () => {
    const { container } = render(
      <ComponentMapper type="multiline" name="test" control={control} />
    );

    expect(container.querySelector(".element.multiline")).toBeInTheDocument();
  });

  it("renders number element", () => {
    const { getByText } = render(
      <ComponentMapper type="number" name="test" control={control} />
    );

    expect(getByText("Type your number")).toBeInTheDocument();
  });

  it("renders select element", () => {
    const { container } = render(
      <ComponentMapper type="select" name="select" control={control} />
    );
    expect(container.querySelector(".element-select")).toBeInTheDocument();
  });

  it("renders radio element", () => {
    const { container } = render(
      <ComponentMapper type="radio" name="radio-radio" control={control} />
    );
    expect(container.querySelectorAll(".option-item.radio")).toHaveLength(4);
  });

  it("renders checkbox element", () => {
    const { container } = render(
      <ComponentMapper
        type="checkbox"
        name="checkbox-checkbox"
        control={control}
      />
    );
    expect(container.querySelectorAll(".option-item.checkbox")).toHaveLength(4);
  });

  it("renders default element for unknown type", () => {
    const { container } = render(
      <ComponentMapper type="" name="test" control={control} />
    );
    expect(container.querySelector(".element")).toBeInTheDocument();
  });
});
