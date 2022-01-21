import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import styles from "@/styles/card.module.scss";

export default function CardNoText({ post, link }) {
	return (
		<div
			className={`
			col-6 
			col-md-6 
			col-lg-6 
			col-xl-3`}
		>
			<Link href={link}>
				<a className="anchorColor">
					<div className={`card ${styles.cardStyle}`}>
						<Image
							alt={post.frontmatter.title}
							// eslint-disable-next-line react/forbid-component-props
							className="card-img-top"
							height={500}
							src={post.frontmatter.pic}
							width={500}
						/>
					</div>
				</a>
			</Link>
		</div>
	);
}

CardNoText.propTypes = {
	link: PropTypes.string.isRequired,
	post: PropTypes.instanceOf(Object).isRequired,
};
