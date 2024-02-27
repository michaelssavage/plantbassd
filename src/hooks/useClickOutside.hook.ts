import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => {
    setSidebar(false);
  };

  const navMenu = useRef<HTMLDivElement>(null);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    const handler = (event: MouseEvent): void => {
      const navArea = navMenu.current;
      if (
        navArea &&
        sidebar &&
        event.target instanceof HTMLElement &&
        !navArea.contains(event.target)
      ) {
        closeSidebar();
      }
    };
    if (sidebar) {
      document.addEventListener("mousedown", handler);
    }
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return { closeSidebar, navMenu, showSidebar, sidebar };
};
