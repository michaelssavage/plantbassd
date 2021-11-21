import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Image from "next/image";
import styles from "./news.module.scss";

export default function ArtistCard() {
	return (
		<div className={styles.newsHolder}>
			<h1 className={`globalHeader ${styles.header}`}>
				Plant Bass'd DJs
			</h1>
		</div>
	);
}
