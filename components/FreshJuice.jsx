import PropTypes from "prop-types";

import CardNoText from "@/cards/CardNoText";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import styles from "@/styles/components.module.scss";

export default function FreshJuice({ freshjuice }) {
	return (
		<section className={styles.bgBlue}>
			<div className="container">
				<h1 className="header" name="fresh-juice">
					Fresh Juice
				</h1>
				<p>New Music Releases Around The World</p>
				<div className="row g-2">
					{freshjuice.map((artist) => (
						<CardNoText
							key={artist.frontmatter.title}
							link={`/fresh-juice/${artist.slug}`}
							post={artist}
						/>
					))}
				</div>

				<DiscoverMoreBtn link="/fresh-juice" />
			</div>
		</section>
	);
}

FreshJuice.propTypes = {
	freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
