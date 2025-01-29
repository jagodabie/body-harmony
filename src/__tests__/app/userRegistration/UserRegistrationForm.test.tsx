import { screen } from "@testing-library/react";

import UserRegistrationForm from "@/app/userRegistration/page";

import { render } from "../../../../custom-render";

describe("UserRegistrationForm", () => {
  it("should render correctly.", () => {
    render(<UserRegistrationForm />);

    const sectionTitle = screen.getByRole("heading", {
      name: "Patient Details",
    });
    const form = screen.getByRole("form");
    expect(sectionTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
