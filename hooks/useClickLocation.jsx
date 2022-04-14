import { useEffect, useRef, useState } from "react";

export default function useClickLocation() {
  const [sidebar, setSidebar] = useState(false),
    closeSidebar = () => {
      setSidebar(false);
    },
    navMenu = useRef(),
    showSidebar = () => {
      setSidebar(!sidebar);
    };
  useEffect(() => {
    const handler = (event) => {
      if (!navMenu.current.contains(event.target) && sidebar) {
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
