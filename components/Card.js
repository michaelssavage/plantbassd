import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

import news from "../styles/slug.module.scss";
import styles from "./styles/card.module.scss";

export const CardExternal = ({ card }) => {
	return (
		<Col xl={3} lg={3} md={6} xs={12}>
			<a href={card.link} rel="noopener noreferrer" target="_blank">
				<Image
					className="card-img-top"
					src={card.pic}
					alt={card.pic}
					width={500}
					height={500}
				/>
			</a>
		</Col>
	);
};

export const CardNoText = ({ post, link }) => {
	const router = useRouter();
	return (
		<Col onClick={() => router.push(link)} xl={3} lg={6} md={6} xs={6}>
			<div className={`card ${styles.cardStyle}`}>
				<Image
					className="card-img-top"
					src={post.frontmatter.pic}
					alt={post.frontmatter.title}
					width={500}
					height={500}
				/>
			</div>
		</Col>
	);
};

export const CardWithText = ({ post, link }) => {
	const router = useRouter();
	return (
		<Col
			onClick={() => router.push(link)}
			className={styles.cardSpacing}
			lg={3}
			md={6}
			sm={6}
			xs={6}
		>
			<div className={`card ${styles.cardStyle}`}>
				<Image
					className="card-img-top"
					src={post.frontmatter.pic}
					alt={post.frontmatter.title}
					width={500}
					height={500}
				/>
				<div className={`${styles.cardBody} card-body`}>
					<p className={styles.cardDate}>{post.frontmatter.date}</p>
					<p className={styles.cardTitle}>{post.frontmatter.bio}</p>
				</div>
			</div>
		</Col>
	);
};

export const CardWithButtons = ({ pic, title, artist, page, insta, link }) => {
	const router = useRouter();
	return (
		<Col>
			<div className={news.newsImage}>
				<Image
					src={pic}
					alt={title}
					width={500}
					height={500}
					layout="responsive"
				/>
				<Row className={news.buttons}>
					<Col className={news.button}>
						<button
							type="button"
							className={`${news.hoverLink} btn btn-outline-dark btn-lg`}
							onClick={() => router.back()}
						>
							Go Back
						</button>
					</Col>
					<Col className={news.button}>
						<a
							role="button"
							className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
							href={page}
						>
							{artist}
						</a>
					</Col>
					<Col className={news.button}>
						<a
							role="button"
							className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
							href={link}
						>
							{insta}
						</a>
					</Col>
				</Row>
			</div>
		</Col>
	);
};

export const CardTopTen = ({ post, link }) => {
	const router = useRouter();
	return (
		<Col onClick={() => router.push(link)} xl={4} lg={4} md={12} xs={12}>
			<div className={`card ${styles.cardStyle}`}>
				<Image
					className="card-img-top"
					src={post.frontmatter.pic}
					alt={post.frontmatter.title}
					width={500}
					height={500}
				/>
			</div>
		</Col>
	);
};
