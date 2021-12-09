import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaBars, FaSpotify } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { RiSoundcloudLine } from "react-icons/ri";

import styles from "./sidebar.module.scss";

function Listing({ link, icon, title, onClick }) {
	return (
		<Link href={link} passHref rel="preload">
			<div
				onClick={onClick}
				className={
					useRouter().pathname == link
						? `${styles.navLink} ${styles.activeLink}`
						: styles.navLink
				}
			>
				{icon}
				<span className={styles.navName}>{title}</span>
			</div>
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

	return (
		<>
			<header
				className={
					sidebar
						? `${styles.header} ${styles.extendHeader}`
						: styles.header
				}
			>
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
			<div
				className={
					sidebar
						? `${styles.navContainer} ${styles.extendNav}`
						: styles.navContainer
				}
			>
				<nav
					className={
						sidebar
							? `${styles.navMenu} ${styles.activeMenu}`
							: styles.navMenu
					}
				>
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
							link="/#mixes"
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
		</>
	);
}
