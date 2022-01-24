import React, { useEffect, useRef, useState } from "react";

export default function useClickLocation() {
	const [sidebar, setSidebar] = useState(false),
		showSidebar = () => {
			setSidebar(!sidebar);
		},
		closeSidebar = () => {
			setSidebar(false);
		},
		navMenu = useRef();
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

	return { sidebar, navMenu, showSidebar, closeSidebar };
}
