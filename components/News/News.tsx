import Link from "next/link";
import { CardWithText } from "components/Card";
import { NewsProps } from "types/frontmatter";

export default function News({ news }: NewsProps[]) {
  return (
    <section className="newsSection">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto mb-0" name="news">
          Latest News
        </h1>
        <div className="col-auto ps-0">
          <Link href="/news" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>
          Catch the latest about club guides, upcoming gigs & events, and more. Keep up to date on our{" "}
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
          <CardWithText key={story.frontmatter.name} link={`/${story.frontmatter.path}/${story.slug}`} post={story} />
        ))}
      </div>
    </section>
  );
}
