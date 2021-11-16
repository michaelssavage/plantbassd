import React from "react";

import styles from "./links.module.scss";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

import Instagram from "./icons/instagram.svg";
import Gmail from "./icons/gmail.svg";
import Soundcloud from "./icons/soundcloud.svg";
import Spotify from "./icons/spotify.svg";
import Facebook from "./icons/facebook.svg";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import linktree from "./linktree.json";

const Icons = () => (
	<Row>
		<Icon
			SocialMedia={<Facebook className={styles.socialIcon} />}
			link="https://www.facebook.com/plantbassddjs"
		/>
		<Icon
			SocialMedia={<Instagram className={styles.socialIcon} />}
			link="https://www.instagram.com/plantbassddjs/"
		/>
		<Icon
			SocialMedia={<Gmail className={styles.socialIcon} />}
			link="mailto: plantbassddjs@gmail.com"
		/>
		<Icon
			SocialMedia={<Spotify className={styles.socialIcon} />}
			link="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
		/>
		<Icon
			SocialMedia={<Soundcloud className={styles.socialIcon} />}
			link="https://soundcloud.com/plantbassddjs"
		/>
	</Row>
);

const Icon = ({ SocialMedia, link }) => (
	<Col className="d-flex justify-content-center">
		<a href={link}>{SocialMedia}</a>
	</Col>
);

export default function Links({ links }) {
	return (
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
						DJ/ Party Collective and dance music blog based in
						Edinburgh and Dublin 🇮🇪 x 🏴󠁧󠁢󠁳󠁣󠁴󠁿.
					</p>
				</Row>

				<Icons />

				{links.map((item, index) => (
					<Row key={index} className={styles.buttonStyle}>
						<Button
							href={item.link}
							size="lg"
							variant="outline-light"
							className="btn-text"
						>
							{item.title}
						</Button>
					</Row>
				))}
			</Container>
		</div>
	);
}

export async function getStaticProps() {
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
