import Link from "next/link";
import { CardNoText } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import Header from "../Header";

interface Props {
  takeovers: AllPostProps[];
}

export const Takeover = ({ takeovers }: Props) => {
  return (
    <section className="takeoverSection col-lg-6 col-md-12">
      <div className="row mb-2 justify-content-end align-items-center">
        <Header first="Takeovers" />
        <div className="col-auto">
          <Link href="/takeovers" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>Artists, Friends, and Guests pick their Top Selects.</p>
      </div>

      <div className="row g-2">
        {takeovers.map((artist) => (
          <CardNoText
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
            key={artist.frontmatter.name}
            link={`/takeovers/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>
    </section>
  );
};
