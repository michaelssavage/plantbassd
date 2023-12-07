import { SimpleCard } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import { Button } from "components/Button";
import Header from "../Header";

interface Props {
  topTen: AllPostProps[];
}

export const TopTen = ({ topTen }: Props) => {
  return (
    <section className="takeoverSection col-lg-6 col-md-12">
      <div className="row mb-2 flex-nowrap justify-content-end align-items-center">
        <Header first="Top Ten" />
        <div className="col-auto">
          <Button to="/top-ten-releases" text="More" />
        </div>
      </div>

      <div className="row mb-2">
        <p>Artists and DJs pick their favourite top ten picks of the year.</p>
      </div>

      <div className="row g-2">
        {topTen.map((artist) => (
          <SimpleCard
            key={artist.frontmatter.name}
            link={`/top-ten-releases/${artist.slug}`}
            post={artist}
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
          />
        ))}
      </div>
    </section>
  );
};
