import PropTypes from "prop-types";
import { CardWithText } from "components/Card";
import Link from "next/link";

export default function News({ news }) {
  return (
    <section className="newsSection">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto heading mb-0" name="news">
          Latest News
        </h1>
        <div className="col-auto">
          <Link href="/news">
            <a className="text-nowrap btn btn-outline-dark" rel="noopener noreferrer" role="button" target="_blank">
              View More
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>
          Catch the latest about club guides, upcoming gigs & Plant Bass'd events, and much more. Keep up to date on our{" "}
          <a
            className="blackAnchor"
            href="http://instagram.com/plantbassd___"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          .
        </p>
      </div>

      <div className="row g-2">
        {news.map((story) => (
          <CardWithText key={story.frontmatter.title} link={`/${story.frontmatter.path}/${story.slug}`} post={story} />
        ))}
      </div>
    </section>
  );
}

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};