import { AllPostProps } from "types/frontmatter";
import { Button } from "components/Button";
import { SimpleCard } from "components/Card";
import { Header } from "components/Header";

interface Props {
  freshjuice: AllPostProps[];
}

export const FreshJuice = ({ freshjuice }: Props) => {
  return (
    <section className="freshSection">
      <div className="row mb-2 align-items-center">
        <Header first="Fresh" second="Juice" />

        <div className="col-auto ps-0">
          <Button to="/fresh-juice" text="More" />
        </div>
      </div>

      <div className="row mb-2">
        <p>Exploring New Music Releases From Around The World.</p>
      </div>

      <div className="row g-2">
        {freshjuice.map((artist) => (
          <SimpleCard
            key={artist.frontmatter.name}
            link={`/fresh-juice/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>
    </section>
  );
};
