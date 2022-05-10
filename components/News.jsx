import CardNoText from "@/cards/CardNoText";
import NewsPreviews from "components/NewsPreviews";
import PropTypes from "prop-types";
import styles from "@/styles/news.module.scss";

export default function News({ news }) {
  const mostRecent = news.slice(0, 2),
    otherNews = news.slice(2, 5);

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
                <h1 className={`header ${styles.mobileHead}`} name="news">
                  Latest News
                </h1>
                <p>
                  Catch the latest about club guides, upcoming gigs & Plant
                  Bass'd events, and much more. Keep up to date on our{` `}
                  <a
                    className="blackAnchor"
                    href="http://instagram.com/plantbassd___"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>
            {mostRecent.map((story) => (
              <CardNoText
                key={story.frontmatter.title}
                link={`/${story.frontmatter.path}/${story.slug}`}
                post={story}
              />
            ))}
          </div>

          <NewsPreviews otherNews={otherNews} />
        </div>
      </div>
    </section>
  );
}

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
