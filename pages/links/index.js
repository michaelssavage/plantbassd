import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { RiSoundcloudLine, RiSpotifyLine } from "react-icons/ri";

import styles from "../../styles/links.module.scss";

const SocialIcon = ({ link, icon }) => {
	return (
		<Col className={styles.iconContainer}>
			<Link href={link} rel="preload">
				<a>{icon}</a>
			</Link>
		</Col>
	);
};

export default function Links({ links, icons }) {
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
						<SocialIcon
							link="https://www.facebook.com/plantbassddjs"
							icon={
								<AiOutlineFacebook
									className={styles.socialIcon}
								/>
							}
						/>
						<SocialIcon
							link="https://www.instagram.com/plantbassddjs/"
							icon={
								<AiOutlineInstagram
									className={styles.socialIcon}
								/>
							}
						/>
						<SocialIcon
							link="mailto: plantbassddjs@gmail.com"
							icon={
								<AiOutlineMail className={styles.socialIcon} />
							}
						/>
						<SocialIcon
							link="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
							icon={
								<RiSpotifyLine className={styles.socialIcon} />
							}
						/>
						<SocialIcon
							link="https://soundcloud.com/plantbassddjs"
							icon={
								<RiSoundcloudLine
									className={styles.socialIcon}
								/>
							}
						/>
					</Row>

					{links.map((item) => (
						<Row key={item.title} className={styles.buttonStyle}>
							<Button
								href={item.link}
								size="lg"
								variant="outline-light"
							>
								{item.icon}
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

	return {
		props: {
			links: frontmatter.links,
		},
	};
}
