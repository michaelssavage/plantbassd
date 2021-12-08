import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import styles from "../styles/page.module.scss";
import cs from "./card.module.scss";

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

export const CardNoText = ({ post, link }) => {
	return (
		<Col key={post.slug} xl={3} lg={4} md={6} xs={6}>
			<Link href={link} passHref>
				<div className={`card ${cs.cardStyle}`}>
					<Image
						className="card-img-top"
						src={post.frontmatter.pic}
						alt={post.frontmatter.title}
						width={500}
						height={500}
					/>
				</div>
			</Link>
		</Col>
	);
};

export const GoBack = () => {
	const router = useRouter();
	return (
		<div className="globalBottomBtn">
			<Button
				size="lg"
				variant="outline-dark"
				onClick={() => router.back()}
			>
				Go Back
			</Button>
		</div>
	);
};
