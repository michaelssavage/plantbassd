import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import { SocialIcon, socialIconList } from "components/IconUtils";
import RellaxImg from "components/RellaxImg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "styles/contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<RellaxImg main={false} img="/various/collage.jpg" />

			<div className={styles.container}>
				<Row>
					<Col lg={6} md={12}>
						<p>
							Plant Bass'd consists of Oisin Campbell, Michael
							Savage, and Peter Toal. Originally from Co.
							Monaghan, Ireland, the three lads created the
							collective in early 2020 with the intention of
							highlighting the differnt communities in the
							electronic music scene.
						</p>
						<p>
							With a shared interests and ambitions, the team
							looks towards creating unforgettable Plant Bass'd
							nights in Edinburgh, Dublin, and Monaghan.
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
					</Col>
					<Col lg={6} md={12} className={styles.imgHolder}>
						<Image
							src="/various/hoodie.jpg"
							alt="three lads"
							width="1080"
							height="719"
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
