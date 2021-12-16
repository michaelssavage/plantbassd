import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { RiSoundcloudLine, RiSpotifyLine } from "react-icons/ri";

import styles from "../../styles/links.module.scss";

export default function Links({ links }) {
	return (
		<>
			<div className={styles.linkPage}>
				<Container className={styles.pushSides}>
					<Row className={styles.pbLogo}>
						<Image
							src="/logo_circle.png"
							alt="plant bass'd logo"
							height="80"
							width="80"
						/>
					</Row>
					<Row className="text-center">
						<h1>Plant Bass'd</h1>
					</Row>

					<Row>
						<Col className={styles.iconContainer}>
							<Link href="https://www.facebook.com/plantbassddjs">
								<a>
									<AiOutlineFacebook
										className={styles.socialIcon}
									/>
								</a>
							</Link>
						</Col>
						<Col className={styles.iconContainer}>
							<Link href="https://www.instagram.com/plantbassddjs/">
								<a>
									<AiOutlineInstagram
										className={styles.socialIcon}
									/>
								</a>
							</Link>
						</Col>
						<Col className={styles.iconContainer}>
							<Link href="mailto: plantbassddjs@gmail.com">
								<a>
									<AiOutlineMail
										className={styles.socialIcon}
									/>
								</a>
							</Link>
						</Col>
						<Col className={styles.iconContainer}>
							<Link href="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf">
								<a>
									<RiSpotifyLine
										className={styles.socialIcon}
									/>
								</a>
							</Link>
						</Col>
						<Col className={styles.iconContainer}>
							<Link href="https://soundcloud.com/plantbassddjs">
								<a>
									<RiSoundcloudLine
										className={styles.socialIcon}
									/>
								</a>
							</Link>
						</Col>
					</Row>

					{links.map((item) => (
						<Row key={item.title} className={styles.buttonStyle}>
							<a
								role="button"
								className="btn btn-outline-light"
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
		path.join("posts/links/linktree.md"),
		"utf-8"
	);
	const { data: frontmatter } = matter(markdownWithMeta);

	return {
		props: {
			links: frontmatter.links,
		},
	};
}
