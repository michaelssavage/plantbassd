import { SocialIcon, socialIconList } from "components/IconUtils";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "styles/links.module.scss";

export default function Links({ links }) {
	return (
		<>
			<div className={styles.linkPage}>
				<Container className={styles.pushSides}>
					<Row className={styles.pbLogo}>
						<Image
							src="/various/logo_circle.png"
							alt="plant bass'd logo"
							height="80"
							width="80"
						/>
					</Row>
					<Row className="text-center">
						<h1>Plant Bass'd</h1>
					</Row>

					<Row>
						{socialIconList.map((item) => (
							<Col
								key={item.link}
								className={styles.iconContainer}
							>
								<Link href={item.link}>
									<a>
										{SocialIcon(
											item.icon,
											styles.socialIcon
										)}
									</a>
								</Link>
							</Col>
						))}
					</Row>

					{links.map((item) => (
						<Row key={item.title} className={styles.buttonStyle}>
							<a
								role="button"
								className={`btn btn-outline-dark ${styles.btnText}`}
								href={item.link}
							>
								{item.title}
							</a>
						</Row>
					))}
				</Container>
			</div>
		</>
	);
}

export async function getStaticProps() {
	// linktree data and the links.
	const markdownWithMeta = fs.readFileSync(
		path.join("posts/utils/linktree.md"),
		"utf-8"
	);
	const { data: frontmatter } = matter(markdownWithMeta);

	return {
		props: {
			links: frontmatter.links,
		},
	};
}
