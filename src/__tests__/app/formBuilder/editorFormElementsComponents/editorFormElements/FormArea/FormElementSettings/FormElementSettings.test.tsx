import { screen } from "@testing-library/react";

import { FormElementSettings } from "@/app/formBuilder/editorFormElementsComponents/FormElementSettings/FormElementSettings";
import { useAppSelector } from "@/hooks/useAppDispatch";

import { render } from "../../../../../../../../custom-render";

jest.mock("../../../../../../../hooks/useAppDispatch", () => ({
  useAppSelector: jest.fn(),
}));

describe("FormElementSettings", () => {
  it("Renders settings with the correct element.", () => {
    (useAppSelector as jest.Mock).mockReturnValue("Text Input");

    render(<FormElementSettings />);

    expect(screen.getByText("Settings: Text Input")).toBeInTheDocument();
  });

  it("Renders correctly when no element is selected.", () => {
    (useAppSelector as jest.Mock).mockReturnValue(null);

    render(<FormElementSettings />);

    expect(screen.getByText("Settings:")).toBeInTheDocument();
  });

  it("Renders correctly with an empty string.", () => {
    (useAppSelector as jest.Mock).mockReturnValue("");

    render(<FormElementSettings />);

    const settings = screen.getByText("Settings:");

    expect(settings).toBeInTheDocument();
  });
});
