import Link from "next/link";
import { Card } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import Header from "components/Header";
import { HoverLink } from "components/HoverLink";
import { plantbassdInstagram } from "utils/constants";

interface Props {
  news: AllPostProps[];
}

export const News = ({ news }: Props) => {
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
          Catch the latest about new music, upcoming gigs & events, and more. Find more on our
          Instagram, <HoverLink url={plantbassdInstagram} name="@plantbassd___" inline external />
        </p>
      </div>

      <div className="row g-2">
        {news.map((story) => (
          <Card
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
            text
          />
        ))}
      </div>
    </section>
  );
};
