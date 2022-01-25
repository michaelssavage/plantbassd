import { socialIconList } from "arrays/SidebarIcons";
import { shimmer, toBase64 } from "components/BlurImg";
import SocialIcon from "components/SocialIcon";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import PropTypes from "prop-types";
import React from "react";
import styles from "styles/links.module.scss";

export default function Links({ links }) {
	return (
		<div className={styles.linkPage}>
			<div className={styles.pushSides}>
				<div className={`row ${styles.pbLogo}`}>
					<Image
						alt="plant bass'd logo"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(400, 400)
						)}`}
						height={60}
						placeholder="blur"
						src="/various/logo_circle.png"
						width={60}
					/>
				</div>
				<div className="row text-center">
					<h1 className={styles.linkHeading}>PLANT BASS'D</h1>
				</div>

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

				{links.map((item) => (
					<div
						className={`row ${styles.buttonStyle}`}
						key={item.title}
					>
						<a
							className={`btn btn-outline-dark ${styles.btnText}`}
							href={item.link}
							role="button"
						>
							{item.title}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
	// Linktree data and the links.
	const markdownWithMeta = fs.readFileSync(
			path.join("posts/utils/linktree.md"),
			"utf-8"
		),
		{ data: frontmatter } = matter(markdownWithMeta);

	return {
		props: {
			links: frontmatter.links,
		},
	};
}

Links.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};
