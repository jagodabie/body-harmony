import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import { FormElementsList } from "@/app/formBuilder/editorFormElementsComponents/FormElementsList/FormElementsList";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { elementsList } from "@/lib/inputsElementsList";
import { addFieldWithCount } from "@/store/slices/formEditorSlice";

jest.mock("../../../../../../../hooks/useAppDispatch", () => ({
  useAppDispatch: jest.fn(),
}));

describe("FormElementsList", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it("renders the elements list correctly", () => {
    render(<FormElementsList elementsList={elementsList} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItem = screen.getAllByRole("listitem");

    expect(listItem).toHaveLength(elementsList.length);
  });

  it("dispatches addFieldWithCount when an text element is clicked", async () => {
    render(<FormElementsList elementsList={elementsList} />);

    const textInputElement = screen.getByText("Text Field");
    await fireEvent.click(textInputElement);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(addFieldWithCount("text"));
  });

  it("dispatches correct action when checkbox element is clicked", async () => {
    render(<FormElementsList elementsList={elementsList} />);

    const checkboxElement = screen.getByText("Checkbox Field");
    await fireEvent.click(checkboxElement);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(addFieldWithCount("checkbox"));
  });

  it("stops propagation when an element is clicked", async () => {
    const onOuterClick = jest.fn();

    render(
      <div onClick={onOuterClick}>
        <FormElementsList elementsList={elementsList} />
      </div>
    );

    const textInputElement = screen.getByText("Text Field");
    await fireEvent.click(textInputElement);

    expect(onOuterClick).toHaveBeenCalledTimes(0);
  });
});
