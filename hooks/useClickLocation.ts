import { useEffect, useRef, useState } from "react";

export default function useClickLocation() {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => {
    setSidebar(false);
  };

  const navMenu = useRef<HTMLDivElement>(null);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    const handler = (event) => {
      const navArea = navMenu.current;
      if (navArea && !navArea.contains(event.target) && sidebar) {
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
}
