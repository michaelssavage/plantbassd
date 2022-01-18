import PropTypes from "prop-types";
import React from "react";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import CardNoText from "@/cards/CardNoText";
import styles from "@/styles/components.module.scss";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<div className="globalSection">
				<h1 className="header" name="takeovers">
					Takeovers
				</h1>
				<p>Top Spotify Selects.</p>
			</div>
			<div className="container">
				<div className="row g-2">
					{takeovers.map((artist) => (
						<CardNoText
							key={artist.frontmatter.title}
							link={`/takeovers/${artist.slug}`}
							post={artist}
						/>
					))}
				</div>

				<DiscoverMoreBtn link="/takeovers" />
			</div>
		</div>
	);
}

Takeover.propTypes = {
	takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
