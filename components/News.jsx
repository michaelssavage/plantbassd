import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import CardWithText from "@/cards/CardWithText";
import styles from "@/styles/news.module.scss";

function OtherNews({ otherNews }) {
	return (
		<>
			<div
				className={`row list-group list-group-flush ${styles.listHorizontal}`}
			>
				{otherNews.map((story) => (
					<Link
						href={`/news/${story.slug}`}
						key={story.frontmatter.title}
					>
						<a className="blackAnchor">
							<div
								className={`list-group-item flex-fill ${styles.cardList}`}
								key={story.frontmatter.title}
							>
								{story.frontmatter.date} {"// "}
								{story.frontmatter.title}
							</div>
						</a>
					</Link>
				))}
			</div>

			<DiscoverMoreBtn link="/news" />
		</>
	);
}

export default function News({ news }) {
	const mostRecent = news.slice(0, 2),
		otherNews = news.slice(2, 6);

	return (
		<section className={styles.bg}>
			<div className="container">
				<div className="p-5">
					<div className="row">
						<div
							className={`${styles.headerContainer}
							col-lg-6 
							col-md-12 
							col-12 
							`}
						>
							<div className={styles.content}>
								<h1
									className={`header ${styles.mobileHead}`}
									name="news"
								>
									Latest News
								</h1>
								<p>
									{`Catch the latest about our Fresh Juice
									series, Plant Bass'd Sweatbox Events,
									upcoming gigs, and much more.`}
								</p>
								<p>
									{`Keep up to date on our Instagram, `}
									<a
										className="blackAnchor"
										href="http://instagra.com/plantbassddjs"
									>
										@plantbassddjs.
									</a>
								</p>
							</div>
						</div>
						{mostRecent.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								link={`/news/${story.slug}`}
								post={story}
							/>
						))}
					</div>

					<OtherNews otherNews={otherNews} />
				</div>
			</div>
		</section>
	);
}

News.propTypes = {
	news: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

OtherNews.propTypes = {
	otherNews: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
