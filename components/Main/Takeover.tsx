import { SimpleCard } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import { Button } from "components/Button";
import Header from "../Header";

interface Props {
  takeovers: AllPostProps[];
}

export const Takeover = ({ takeovers }: Props) => {
  return (
    <section className="takeoverSection col-lg-6 col-md-12">
      <div className="row mb-2 flex-nowrap justify-content-end align-items-center">
        <Header first="Takeovers" />
        <div className="col-auto">
          <Button to="/takeovers" text="More" />
        </div>
      </div>

      <div className="row mb-2">
        <p>Artists, Friends, and Guests pick their Top Selects.</p>
      </div>

      <div className="row g-2">
        {takeovers.map((artist) => (
          <SimpleCard
            key={artist.frontmatter.name}
            link={`/takeovers/${artist.slug}`}
            post={artist}
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
          />
        ))}
      </div>
    </section>
  );
};
