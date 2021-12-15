import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../styles/page.module.scss";
import news from "../styles/slug.module.scss";

export const CardNoText = ({ post, link }) => {
	return (
		<Col key={post.slug} xl={3} lg={4} md={6} xs={6}>
			<Link href={link} passHref>
				<div className={`card ${styles.cardStyle}`}>
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

export const CardWithText = ({ post, link }) => {
	return (
		<Col
			className={styles.cardSpacing}
			key={post.slug}
			lg={3}
			md={6}
			sm={6}
			xs={6}
		>
			<Link href={link} passHref>
				<div className={`card ${styles.cardStyle}`}>
					<Image
						className="card-img-top"
						src={post.frontmatter.pic}
						alt={post.frontmatter.title}
						width={500}
						height={500}
					/>
					<div className={`${styles.cardBody} card-body`}>
						<p className={styles.cardDate}>
							{post.frontmatter.date}
						</p>
						<p className={styles.cardTitle}>
							{post.frontmatter.bio}
						</p>
					</div>
				</div>
			</Link>
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
