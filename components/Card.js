import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

import styles from "./card.module.scss";

export const CardWithText = ({ post, link }) => {
	return (
		<Col key={post.slug} lg={3} md={6} sm={6} xs={12}>
			<Link href={link} passHref>
				<div className={`card ${styles.cardStyle}`}>
					<Image
						className="card-img-top"
						src={post.frontmatter.pic}
						alt={post.frontmatter.title}
						width={500}
						height={500}
					/>
					<div className="card-body">
						<p className="small">{post.frontmatter.date}</p>
						<h5 className="card-title">{post.frontmatter.bio}</h5>
					</div>
				</div>
			</Link>
		</Col>
	);
};

export const CardNoText = ({ post, link }) => {
	return (
		<Col key={post.slug} lg={3} md={6} xs={6}>
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
