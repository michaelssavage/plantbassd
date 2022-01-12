import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import { SocialIcon } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import path from "path";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import styles from "styles/contact.module.scss";

export default function ContactPage({ icons }) {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/various/collage.jpg",
							amount: 0.4,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<div className={styles.container}>
				<Row>
					<Col lg={6} md={12}>
						<h1 className={styles.header}>About Us</h1>
						<p>
							Plant Bass'd consists of Oisin Campbell, Michael
							Savage, and Peter Toal. Originally from Monaghan,
							Ireland the three lads have joined their different
							music tastes together to form an inclusive
							collective.
						</p>

						<p>
							Site by{" "}
							<a
								className="blackAnchor"
								href="https://www.github.com/michaelssavage"
							>
								Michael.
							</a>
						</p>

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
					</Col>
					<Col lg={6} md={12} className={styles.imgHolder}>
						<Image
							src="/various/hoodie.jpg"
							alt="three lads"
							width="500"
							height="360"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className={styles.header}>Contact Us</h1>

						<ContactForm />
					</Col>
				</Row>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const iconMarkdown = fs.readFileSync(
		path.join("posts/utils/icons.md"),
		"utf-8"
	);
	const { data: iconmatter } = matter(iconMarkdown);

	return {
		props: {
			icons: iconmatter.icons,
		},
	};
}
