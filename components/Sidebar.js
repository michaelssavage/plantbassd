import { sidebarList, SocialIcon } from "components/IconUtils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import styles from "@/styles/sidebar.module.scss";

function Listing({ link, onClick, title }) {
	const router = useRouter();
	return (
		<Link href={link} passHref>
			<a style={{ textDecoration: "none" }}>
				<div
					onClick={onClick}
					className={
						router.pathname == link
							? styles.activeLink
							: styles.navLink
					}
				>
					{SocialIcon(title, styles.navIcon)}
					<span className={styles.navName}>{title}</span>
				</div>
			</a>
		</Link>
	);
}

export default function Sidebar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	const closeSidebar = () => {
		setSidebar(false);
	};

	let navMenu = useRef();
	useEffect(() => {
		let handler = (event) => {
			if (!navMenu.current.contains(event.target)) {
				closeSidebar();
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<div ref={navMenu}>
			<header className={sidebar ? styles.extendHeader : styles.header}>
				<div>
					{sidebar ? (
						<AiOutlineClose
							className={styles.headerToggle}
							onClick={showSidebar}
						/>
					) : (
						<FaBars
							className={styles.headerToggle}
							onClick={showSidebar}
						/>
					)}
				</div>
			</header>
			<div className={sidebar ? styles.extendNav : styles.navContainer}>
				<nav className={styles.navMenu}>
					<div className={styles.navList}>
						{sidebarList.map((item) => (
							<Listing
								key={item.title}
								link={item.link}
								onClick={closeSidebar}
								title={item.title}
							/>
						))}
					</div>
				</nav>
			</div>
		</div>
	);
}
