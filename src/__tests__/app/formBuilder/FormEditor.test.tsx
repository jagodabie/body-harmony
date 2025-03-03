import { screen } from "@testing-library/react";

import FormEditor from "@/app/form/[formId]/page";

import { render } from "../../../../custom-render";

describe("FormEditor component", () => {
  // TODO: mock dependencies
  it.skip("FormEditor component renders correctly", () => {
    render(<FormEditor />);
    const title = screen.getByRole("heading", { name: "Preview" });
    const elementsList = screen.getByRole("heading", { name: "Elements list" });
    const settings = screen.getByRole("heading", { name: "Settings:" });

    expect(title).toBeInTheDocument();
    expect(elementsList).toBeInTheDocument();
    expect(settings).toBeInTheDocument();
  });
});
