import { AllPostProps } from "types/frontmatter";
import Header from "components/Header";
import { HoverLink } from "components/HoverLink";
import { plantbassdInstagram } from "utils/constants";
import { Button } from "components/Button";
import { TextCard } from "components/Card";

interface Props {
  news: AllPostProps[];
}

export const News = ({ news }: Props) => {
  return (
    <section className="newsSection">
      <div className="row mb-2 align-items-center">
        <Header first="Latest" second="News" />
        <div className="col-auto ps-0">
          <Button to="/news" text="More" />
        </div>
      </div>

      <div className="row mb-2">
        <p>
          Find more on our Instagram, <HoverLink url={plantbassdInstagram} name="@plantbassd___" />
        </p>
      </div>

      <div className="row g-2">
        {news.map((story) => (
          <TextCard
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
          />
        ))}
      </div>
    </section>
  );
};
