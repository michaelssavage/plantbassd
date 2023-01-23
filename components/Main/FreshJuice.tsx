import Link from "next/link";
import { CardNoText } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import Header from "../Header";

interface Props {
  freshjuice: AllPostProps[];
}

export const FreshJuice = ({ freshjuice }: Props) => {
  return (
    <section className="freshSection">
      <div className="row mb-2 align-items-center">
        <Header first="Fresh" second="Juice" />

        <div className="col-auto ps-0">
          <Link href="/fresh-juice" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>Exploring New Music Releases From Around The World.</p>
      </div>

      <div className="row g-2">
        {freshjuice.map((artist) => (
          <CardNoText
            key={artist.frontmatter.name}
            link={`/fresh-juice/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>
    </section>
  );
};
