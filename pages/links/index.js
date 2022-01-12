import { SocialIcon } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "styles/links.module.scss";

export default function Links({ links, icons }) {
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
						{icons.map((item) => (
							<SocialIcon
								key={item.link}
								styleContainer={styles.iconContainer}
								styleIcon={styles.socialIcon}
								link={item.link}
								icon={item.icon}
							/>
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

	const iconMarkdown = fs.readFileSync(
		path.join("posts/utils/icons.md"),
		"utf-8"
	);
	const { data: iconmatter } = matter(iconMarkdown);

	return {
		props: {
			links: frontmatter.links,
			icons: iconmatter.icons,
		},
	};
}
