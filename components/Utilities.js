import { useRouter } from "next/router";
import React from "react";
import { Row } from "react-bootstrap";

import styles from "../styles/page.module.scss";
import { CardNoText } from "./Card";

export const Content = ({ title, description, button, cards, route }) => {
	return (
		<>
			<h1 className={`globalHeader ${styles.bHeader}`}>{title}</h1>

			<p className={styles.bTexter}>{description}</p>
			<p className={styles.bTexter}>{button}</p>

			<Row className="g-3">
				{cards.map((card) => (
					<CardNoText
						key={card.frontmatter.title}
						post={card}
						link={`${route}/${card.slug}`}
					/>
				))}
			</Row>
		</>
	);
};

export const GoBack = () => {
	const router = useRouter();
	return (
		<div className="globalBottomBtn">
			<button
				type="button"
				className="btn btn-outline-dark btn-lg"
				onClick={() => router.back()}
			>
				Go Back
			</button>
		</div>
	);
};

export const sortByDate = (a, b) => {
	return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
};
