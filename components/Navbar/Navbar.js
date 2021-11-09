import { Navbar, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";

export default function NavbarComponent() {
	const [show, setShow] = useState(true);
	const controlNavbar = () => {
		if (window.scrollY > 300) {
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
				collapseOnSelect
				expand="lg"
				className={`${styles.navStyle} p-4 `}
				fixed="top"
			>
				<Navbar.Brand href="/">
					<Image
						alt="plant bassd logo"
						src="/images/logo_circle.png"
						width="100"
						height="100"
						className="d-inline-block align-top"
					/>{" "}
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className="navbar-dark"
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-end"
				>
					{show ? (
						<Nav>
							<Nav.Link className="px-4" href="/">
								<h4 className={styles.linkText}>Home</h4>
							</Nav.Link>
							<Nav.Link className="px-4" href="/radio">
								<h4 className={styles.linkText}>Radio</h4>
							</Nav.Link>
							<Nav.Link className="px-4" href="/takeovers">
								<h4 className={styles.linkText}>Takeovers</h4>
							</Nav.Link>
							<Nav.Link className="px-4" href="/contact-us">
								<h4 className={styles.linkText}>Contact Us</h4>
							</Nav.Link>
						</Nav>
					) : null}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
