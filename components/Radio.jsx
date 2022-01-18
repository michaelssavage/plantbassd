import PropTypes from "prop-types";
import React from "react";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import CardNoText from "@/cards/CardNoText";
import styles from "@/styles/components.module.scss";

export default function Radio({ radios }) {
	return (
		<div className={styles.bgBlue}>
			<div className="globalSection">
				<h1 className="header" name="radios">
					Guest Radio
				</h1>
				<p>Plant Bass'd Radio Mixes.</p>
			</div>
			<div className="container">
				<div className="row g-2">
					{radios.map((artist) => (
						<CardNoText
							key={artist.frontmatter.title}
							link={`/radios/${artist.slug}`}
							post={artist}
						/>
					))}
				</div>

				<DiscoverMoreBtn link="/radios" />
			</div>
		</div>
	);
}

Radio.propTypes = {
	radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
