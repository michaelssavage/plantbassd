import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaBars, FaSpotify } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { RiSoundcloudLine } from "react-icons/ri";

import styles from "@/styles/sidebar.module.scss";

function Listing({ link, icon, title, onClick }) {
	const router = useRouter();
	return (
		<Link href={link} passHref>
			<a className="anchor">
				<div
					onClick={onClick}
					className={
						router.pathname == link
							? styles.activeLink
							: styles.navLink
					}
				>
					{icon}
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
						<Listing
							link="/"
							icon={<AiFillHome className={styles.navIcon} />}
							show={sidebar}
							title="Home"
							onClick={closeSidebar}
						/>

						<Listing
							link="/news"
							icon={<ImNewspaper className={styles.navIcon} />}
							show={sidebar}
							title="News"
							onClick={closeSidebar}
						/>

						<Listing
							link="/mixes"
							icon={
								<RiSoundcloudLine className={styles.navIcon} />
							}
							show={sidebar}
							title="Mixes"
							onClick={closeSidebar}
						/>

						<Listing
							link="/radios"
							icon={<BiRadio className={styles.navIcon} />}
							show={sidebar}
							title="Radio"
							onClick={closeSidebar}
						/>

						<Listing
							link="/takeovers"
							icon={<FaSpotify className={styles.navIcon} />}
							show={sidebar}
							title="Takeovers"
							onClick={closeSidebar}
						/>

						<Listing
							link="/contact-us"
							icon={<MdContacts className={styles.navIcon} />}
							show={sidebar}
							title="Contact Us"
							onClick={closeSidebar}
						/>

						<Listing
							link="/links"
							icon={<AiOutlineLink className={styles.navIcon} />}
							show={sidebar}
							title="Links"
							onClick={closeSidebar}
						/>
					</div>
				</nav>
			</div>
		</div>
	);
}
