import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CustomSwitch } from "@/components/ui/CustomSwitch/CustomSwitch";
import { Theme } from "@/types";

describe("CustomSwitch Component", () => {
  const toggleThemeMock = jest.fn();

  it("renders light mode by default", () => {
    render(<CustomSwitch theme={Theme.LIGHT} toggleTheme={toggleThemeMock} />);

    const lightModeIcon = screen.getByRole("checkbox");
    expect(lightModeIcon).toBeInTheDocument();
    expect(lightModeIcon).not.toBeChecked();
  });

  it("renders dark mode when theme is set to dark", () => {
    render(<CustomSwitch theme={Theme.DARK} toggleTheme={toggleThemeMock} />);

    const darkModeIcon = screen.getByLabelText("enable dark mode");
    expect(darkModeIcon).toBeChecked();
  });

  it("calls toggleTheme function when switch is clicked", async () => {
    render(<CustomSwitch theme={Theme.LIGHT} toggleTheme={toggleThemeMock} />);

    const switchElement = screen.getByRole("checkbox");
    await userEvent.click(switchElement);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("toggles theme correctly from light to dark", async () => {
    const { rerender } = render(
      <CustomSwitch theme={Theme.LIGHT} toggleTheme={toggleThemeMock} />
    );

    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).not.toBeChecked();

    rerender(<CustomSwitch theme={Theme.DARK} toggleTheme={toggleThemeMock} />);

    expect(switchElement).toBeChecked();
  });
});
