import { RefObject, useEffect } from "react";

type ClickOutsideHandler = (event: MouseEvent) => void;

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: ClickOutsideHandler
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !event.composedPath().includes(ref?.current)) {
        handler(event);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [ref, handler]);
};
