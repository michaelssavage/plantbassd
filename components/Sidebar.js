import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaBars, FaSpotify } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { RiSoundcloudLine } from "react-icons/ri";

import styles from "./sidebar.module.scss";

function Listing({ link, icon, show, title, navLink }) {
	return (
		<Link href={link} passHref>
			<li className={navLink}>
				{icon}
				<span
					className={
						show
							? styles.navName
							: `${styles.navName} ${styles.hideName}`
					}
				>
					{title}
				</span>
			</li>
		</Link>
	);
}

export default function Sidebar({ sidebarList }) {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	const router = useRouter();

	return (
		<>
			<header
				className={
					sidebar
						? `${styles.navbar} ${styles.extendedNavbar}`
						: styles.navbar
				}
			>
				<div>
					{sidebar ? (
						<AiOutlineClose
							className={styles.menuBars}
							onClick={showSidebar}
						/>
					) : (
						<FaBars
							className={styles.menuBars}
							onClick={showSidebar}
						/>
					)}
				</div>
			</header>
			<nav
				className={
					sidebar
						? `${styles.navMenu} ${styles.activeMenu}`
						: styles.navMenu
				}
			>
				<ul className={styles.navList}>
					<Listing
						link="/"
						navLink={
							router.pathname == "/"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<AiFillHome className={styles.navIcon} />}
						show={sidebar}
						title="Home"
					/>

					<Listing
						link="/news"
						navLink={
							router.pathname == "/news"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<ImNewspaper className={styles.navIcon} />}
						show={sidebar}
						title="News"
					/>

					<Listing
						link="/#mixes"
						navLink={
							router.pathname == "/mixes"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<RiSoundcloudLine className={styles.navIcon} />}
						show={sidebar}
						title="Mixes"
					/>

					<Listing
						link="/radios"
						navLink={
							router.pathname == "/radios"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<BiRadio className={styles.navIcon} />}
						show={sidebar}
						title="Radio"
					/>

					<Listing
						link="/takeovers"
						navLink={
							router.pathname == "/takeovers"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<FaSpotify className={styles.navIcon} />}
						show={sidebar}
						title="Takeovers"
					/>

					<Listing
						link="/contact-us"
						navLink={
							router.pathname == "/contact-us"
								? `${styles.navLink} ${styles.activeLink}`
								: styles.navLink
						}
						icon={<MdContacts className={styles.navIcon} />}
						show={sidebar}
						title="Contact Us"
					/>
				</ul>
			</nav>
		</>
	);
}
