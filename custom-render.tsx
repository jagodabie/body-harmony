import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "react-redux";

import { rootReducer } from "@/store/rootStore";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  preloadedState?: Record<string, unknown>;
  store?: ReturnType<typeof configureStore>;
  formDefaultValues?: Record<string, unknown>;
}

const customRender = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    formDefaultValues = {},
    ...options
  }: CustomRenderOptions = {}
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const methods = useForm({ defaultValues: formDefaultValues });

    return (
      <Provider store={store}>
        <FormProvider {...methods}>{children}</FormProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
