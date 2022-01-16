import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiSoundcloudLine } from "react-icons/ri";
import news from "styles/slug.module.scss";

import styles from "@/styles/card.module.scss";

export const CardExternal = ({ card }) => {
	return (
		<Col xl={3} lg={6} md={6} xs={6}>
			<div className="imgContainer">
				<a href={card.link} rel="noopener noreferrer" target="_blank">
					<Image
						className="card-img-top"
						src={card.pic}
						alt={card.pic}
						width={500}
						height={500}
					/>
					<div className="soundcloudOverlay">
						<div className="imgTextOverlay">
							<RiSoundcloudLine /> Listen Now
						</div>
					</div>
				</a>
			</div>
		</Col>
	);
};

export const CardNoText = ({ post, link }) => {
	return (
		<Col xl={3} lg={6} md={6} xs={6}>
			<Link href={link}>
				<a className="anchorColor">
					<div className={`card ${styles.cardStyle}`}>
						<Image
							className="card-img-top"
							src={post.frontmatter.pic}
							alt={post.frontmatter.title}
							width={500}
							height={500}
						/>
					</div>
				</a>
			</Link>
		</Col>
	);
};

export const CardWithText = ({ post, link }) => {
	return (
		<Col className={styles.cardSpacing} lg={3} md={6} sm={6} xs={6}>
			<Link href={link}>
				<a className="anchorColor">
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
				</a>
			</Link>
		</Col>
	);
};

export const CardTopTen = ({ post, link }) => {
	return (
		<Col xl={4} lg={4} md={12} xs={12}>
			<Link href={link}>
				<a className="anchorColor">
					<div className={`card ${styles.cardStyle}`}>
						<Image
							className="card-img-top"
							src={post.frontmatter.pic}
							alt={post.frontmatter.title}
							width={500}
							height={500}
						/>
					</div>
				</a>
			</Link>
		</Col>
	);
};

export const CardWithButtons = ({ pic, title, artist, page, insta, link }) => {
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
						<Link href={page}>
							<a
								role="button"
								className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
							>
								{artist}
							</a>
						</Link>
					</Col>
					<Col className={news.button}>
						<Link href={page}>
							<a
								role="button"
								className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
								href={link}
							>
								{insta}
							</a>
						</Link>
					</Col>
				</Row>
			</div>
		</Col>
	);
};
