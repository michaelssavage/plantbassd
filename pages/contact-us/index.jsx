import { socialIconList } from "arrays/SidebarIcons";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import RellaxImg from "components/RellaxImg";
import SocialIcon from "components/SocialIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<RellaxImg img="/various/collage.jpg" main={false} />

			<div className={styles.container}>
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<p>
							{`Plant Bass'd consists of Oisin Campbell, Michael
							Savage, and Peter Toal. Originally from Co.
							Monaghan, Ireland, the three lads created the
							collective in early 2020 with the intention of
							highlighting the different communities in the
							electronic music scene.`}
						</p>
						<p>
							{`With shared interests and ambitions, the team looks
							towards creating unforgettable Plant Bass'd nights
							in Edinburgh, Glasgow, Dublin, and Monaghan.`}
						</p>

						<p>
							{`Site by `}
							<a
								className="blackAnchor"
								href="https://www.github.com/michaelssavage"
							>
								Michael.
							</a>
						</p>

						<div className="row">
							{socialIconList.map((item) => (
								<div
									className={`col ${styles.iconContainer}`}
									key={item.link}
								>
									<Link href={item.link}>
										<a>
											<SocialIcon
												icon={item.icon}
												styling={styles.socialIcon}
											/>
										</a>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div
						className={`${styles.imgHolder}
						col-lg-6 
						col-md-12
					`}
					>
						<Image
							alt="three lads"
							height="719"
							src="/various/hoodie.jpg"
							width="1080"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h1 className={styles.header}>Contact Us</h1>

						<ContactForm />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
