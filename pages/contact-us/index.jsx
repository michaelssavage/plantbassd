import { socialIconList } from "arrays/SidebarIcons";
import { shimmer, toBase64 } from "components/BlurImg";
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
				<div className="row pb-4">
					<div className="col-lg-8 col-md-12">
						<h1 className={styles.header}>About Us</h1>

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

						<div className="row">
							{socialIconList.map((item) => (
								<div className="col" key={item.link}>
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
					<div className="col-lg-4 col-md-12">
						<Image
							alt="three lads"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(400, 400)
							)}`}
							// eslint-disable-next-line react/forbid-component-props
							className={styles.img}
							height={540}
							placeholder="blur"
							src="/various/hoodie.jpg"
							width={810}
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
