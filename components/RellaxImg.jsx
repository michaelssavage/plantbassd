import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Rellax from "rellax";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

import styles from "./styles/rellax.module.scss";

export default function RellaxImg({ img, main }) {
	useEffect(() => {
		// eslint-disable-next-line new-cap, no-new
		new Rellax(".animate", {
			center: false,
			horizontal: false,
			round: true,
			speed: -5,
			vertical: true,
			wrapper: null,
		});
	}, []);

	return (
		<section>
			<div className={styles.bgWrap}>
				<Image
					alt="background image"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(1080, 720)
					)}`}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
					src={img}
				/>
			</div>

			<div className={styles.frontText}>
				<div className={`animate ${styles.textShape}`}>
					<h1 className={styles.header}>Plant Bass'd</h1>

					<p>
						Profiling the experimental dance music world and
						throwing parties in between.
					</p>
					{main ? (
						<DiscoverMoreBtn link="/contact-us" title="About Us" />
					) : null}
				</div>
			</div>
		</section>
	);
}

RellaxImg.propTypes = {
	img: PropTypes.string.isRequired,
	main: PropTypes.bool.isRequired,
};
