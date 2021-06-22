import { useState, useEffect } from "react";

const useFocusTracker = (element: any, isToggleable = false): boolean => {
  const [focused, setFocused] = useState<boolean>(false);

  const clickWatcher = (e: any) => {
    if (element && element.current) {
      const elClicked =
        e.target === element.current || element.current.contains(e.target);

      if (isToggleable) {
        if (elClicked) {
          setFocused((focused) => !focused);
        } else {
          setFocused(false);
        }
      } else {
        setFocused(elClicked);
      }
    }
  };

  useEffect(() => {
    if (element) {
      document.addEventListener("click", clickWatcher);
      return () => document.removeEventListener("click", clickWatcher);
    }
  }, [element]);

  return focused;
};

export default useFocusTracker;
