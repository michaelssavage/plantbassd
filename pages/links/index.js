import React from "react";
import styles from "./links.module.scss";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Links({ links, icons }) {
	return (
		<>
			<div className={styles.linkPage}>
				<Container className={styles.pushSides}>
					<Row className={`${styles.logo} justify-content-center`}>
						<Image
							src="/images/logo_circle.png"
							alt="plant bass'd logo"
							height="200"
							width="200"
						/>
					</Row>
					<Row className="text-center">
						<h1 className="btn-text">Plant Bass'd DJs</h1>
						<p className="btn-text">
							Party Throwers and electronic music blog based in
							Edinburgh and Dublin.
						</p>
					</Row>

					<Row>
						{icons.map((icon) => (
							<Col
								key={icon.id}
								className="d-flex justify-content-center"
							>
								<a href={icon.link}>
									<Image
										src={icon.src}
										alt={icon.link}
										height={50}
										width={50}
										className={styles.socialIcon}
									/>
								</a>
							</Col>
						))}
					</Row>

					{links.map((item) => (
						<Row key={item.title} className={styles.buttonStyle}>
							<Button
								href={item.link}
								size="lg"
								variant="outline-light"
							>
								{item.title}
							</Button>
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
		path.join("posts/links/linktree.md"),
		"utf-8"
	);
	const { data: frontmatter } = matter(markdownWithMeta);

	// icons svg src and the link associated with it.
	const iconsList = fs.readFileSync(
		path.join("posts/links/icons.md"),
		"utf-8"
	);
	const { data: iconMatter } = matter(iconsList);

	return {
		props: {
			links: frontmatter.links,
			icons: iconMatter.icons,
		},
	};
}
