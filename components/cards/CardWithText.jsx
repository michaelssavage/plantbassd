import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import styles from "@/styles/card.module.scss";

export default function CardWithText({ post, link }) {
	return (
		<div
			className={`${styles.cardSpacing}
			col-6 
			col-sm-6 
			col-md-6 
			col-lg-3`}
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
						<div className={`${styles.cardBody} card-body`}>
							<p className={styles.cardDate}>
								{post.frontmatter.date}
							</p>
							<p className={styles.cardTitle}>
								{post.frontmatter.bio}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

CardWithText.propTypes = {
	link: PropTypes.string.isRequired,
	post: PropTypes.instanceOf(Object).isRequired,
};
