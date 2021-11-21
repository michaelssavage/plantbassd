import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../construction.module.scss";

export default function NewsPage() {
	return (
		<>
			<Navbar />

			<div className={styles.container}>
				<h1>Under Construction</h1>
			</div>

			<Footer />
		</>
	);
}
