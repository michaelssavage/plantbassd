import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose, AiFillHome, AiOutlineLink } from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaBars, FaSpotify } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { RiSoundcloudLine } from "react-icons/ri";

import styles from "./sidebar.module.scss";

function Listing({ link, icon, title }) {
	return (
		<Link href={link} passHref>
			<div
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
						/>

						<Listing
							link="/news"
							icon={<ImNewspaper className={styles.navIcon} />}
							show={sidebar}
							title="News"
						/>

						<Listing
							link="/#mixes"
							icon={
								<RiSoundcloudLine className={styles.navIcon} />
							}
							show={sidebar}
							title="Mixes"
						/>

						<Listing
							link="/radios"
							icon={<BiRadio className={styles.navIcon} />}
							show={sidebar}
							title="Radio"
						/>

						<Listing
							link="/takeovers"
							icon={<FaSpotify className={styles.navIcon} />}
							show={sidebar}
							title="Takeovers"
						/>

						<Listing
							link="/contact-us"
							icon={<MdContacts className={styles.navIcon} />}
							show={sidebar}
							title="Contact Us"
						/>

						<Listing
							link="/links"
							icon={<AiOutlineLink className={styles.navIcon} />}
							show={sidebar}
							title="Links"
						/>
					</div>
				</nav>
			</div>
		</>
	);
}
