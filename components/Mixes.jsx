import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import React from "react";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import styles from "@/styles/mixes.module.scss";

export default function ArtistCard() {
	return (
		<section className={styles.mixSection}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className={styles.mixImages}>
							<Image
								alt="setradio logo"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(400, 400)
								)}`}
								height={400}
								placeholder="blur"
								src="/mixes/7-set.jpg"
								width={400}
							/>
							<div className={styles.topImage}>
								<Image
									alt="itsnotradio logo"
									blurDataURL={`data:image/svg+xml;base64,${toBase64(
										shimmer(400, 400)
									)}`}
									height="400"
									placeholder="blur"
									src="/mixes/1-itsnotradio.jpg"
									width="400"
								/>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className={`text-center ${styles.clubDescriptor}`}>
							<h1 className="header" name="mixes">
								Mixes
							</h1>
							<p>
								{`Jungle, Techno, Garage, Rave selects, and more.
								Listen on EHFM, ITSNOTRADIO, and Aurora, and our
								Soundcloud.`}
							</p>

							<p>
								{`House, Disco, and Groovy numbers. Find these on
								SET RADIO and our Soundcloud.`}
							</p>

							<DiscoverMoreBtn link="/mixes" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
