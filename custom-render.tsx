import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import AppProviders from "@/providers/appProviders/AppProviders";

const customRender = (ui: ReactElement) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <AppProviders>{children}</AppProviders>
  );

  return render(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";
export { customRender as render };
