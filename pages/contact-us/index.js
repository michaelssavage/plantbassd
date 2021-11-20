import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar.js";
import styles from "./contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd DJs blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Navbar />

			<div className={styles.container}>
				<h1>Under Construction</h1>
			</div>
		</>
	);
}
