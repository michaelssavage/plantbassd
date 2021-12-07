import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

import styles from "./navbar.module.scss";

export default function NavbarComponent() {
	const [showNavbarBG, setShow] = useState(true);
	const controlNavbar = () => {
		if (window.scrollY > 500 && window.innerWidth > 992) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, []);

	return (
		<>
			<Navbar
				fixed="top"
				collapseOnSelect
				expand="lg"
				className={`${styles.navStyle} ${
					showNavbarBG ? null : styles.isScrolled
				}`}
			>
				<Navbar.Brand
					className={styles.logoLink}
					onClick={() => Router.push("/")}
				>
					<Image
						alt="plant bassd logo"
						src="/images/logo_circle.png"
						width="50"
						height="50"
					/>{" "}
				</Navbar.Brand>

				{/* When aria-controls clicked it hits the Collapse id. */}
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className={`${styles.toggler} navbar-dark`}
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className={styles.collapser}
				>
					<Nav>
						<Nav.Link
							className="px-4"
							onClick={() => Router.push("/")}
						>
							<h4 className={styles.linkText}>Home</h4>
						</Nav.Link>
						<Nav.Link
							className="px-4"
							onClick={() => Router.push("/radios")}
						>
							<h4 className={styles.linkText}>Radio</h4>
						</Nav.Link>
						<Nav.Link
							className="px-4"
							onClick={() => Router.push("/takeovers")}
						>
							<h4 className={styles.linkText}>Takeovers</h4>
						</Nav.Link>
						<Nav.Link
							className="px-4"
							onClick={() => Router.push("/contact-us")}
						>
							<h4 className={styles.linkText}>Contact Us</h4>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
