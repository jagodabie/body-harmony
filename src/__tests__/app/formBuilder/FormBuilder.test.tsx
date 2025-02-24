import { screen } from "@testing-library/react";

import FormBuilder from "@/app/form/[formId]/page";

import { render } from "../../../../custom-render";

describe("FormBuilder component", () => {
  it("FormBuilder component renders correctly", () => {
    render(<FormBuilder />);
    const title = screen.getByRole("heading", { name: "Preview" });
    const elementsList = screen.getByRole("heading", { name: "Elements list" });
    const settings = screen.getByRole("heading", { name: "Settings:" });

    expect(title).toBeInTheDocument();
    expect(elementsList).toBeInTheDocument();
    expect(settings).toBeInTheDocument();
  });
});
