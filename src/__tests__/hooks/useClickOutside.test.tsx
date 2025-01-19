import { renderHook } from "@testing-library/react";

import { useClickOutside } from "@/hooks/useClickOutsideHandler";

describe("useClickOutside hook", () => {
  it("should call the handler when clicking outside the ref", () => {
    const handler = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useClickOutside(ref, handler));

    document.body.click();

    expect(handler).toHaveBeenCalled();
  });

  it("should not call the handler when clicking inside the ref", () => {
    const handler = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useClickOutside(ref, handler));

    ref.current?.click();

    expect(handler).not.toHaveBeenCalled();
  });
});
