import Link from "next/link";
import { CardWithText } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import Header from "components/Header";

interface Props {
  news: AllPostProps[];
}

export default function News({ news }: Props) {
  return (
    <section className="newsSection">
      <div className="row mb-2 align-items-center">
        <Header first="Latest" second="News" />
        <div className="col-auto ps-0">
          <Link href="/news" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>
          Catch the latest about new music, upcoming gigs & events, and more. Find more on our{" "}
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
          <CardWithText
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
          />
        ))}
      </div>
    </section>
  );
}
