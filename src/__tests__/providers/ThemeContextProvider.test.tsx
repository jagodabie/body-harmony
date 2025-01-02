import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  ThemeContextProvider,
  useTheme,
} from "@/providers/themeProvider/ThemeProvider";

export const TestingComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="theme-text">{`Current theme is ${theme}`}</p>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

const renderWithTheme = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ThemeContextProvider });
};

describe("ThemeContextProvider", () => {
  it("renders children and displays initial theme", () => {
    renderWithTheme(<TestingComponent />);

    const paragraphElement = screen.getByTestId("theme-text");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent("Current theme is light");

    const buttonElement = screen.getByRole("button", { name: /change theme/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("toggles theme on button click", async () => {
    renderWithTheme(<TestingComponent />);
    const buttonElement = screen.getByRole("button", { name: /change theme/i });
    const paragraphElement = screen.getByTestId("theme-text");

    await userEvent.click(buttonElement);
    expect(paragraphElement).toHaveTextContent("Current theme is dark");

    await userEvent.click(buttonElement);
    expect(paragraphElement).toHaveTextContent("Current theme is light");
  });
});
