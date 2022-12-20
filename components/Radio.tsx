import Link from "next/link";
import { CardNoText } from "components/Card";
import { AllPostProps } from "types/frontmatter";
import Header from "./Header";

interface Props {
  radios: AllPostProps[];
}

export default function Radio({ radios }: Props) {
  return (
    <section className="radioSection col-lg-6 col-md-12">
      <div className="row mb-2 align-items-center">
        <Header first="Radios" />

        <div className="col-auto ps-0">
          <Link href="/radios" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>Guest Radio Mixes from homegrown organic DJs</p>
      </div>

      <div className="row g-2">
        {radios.map((artist) => (
          <CardNoText
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
            key={artist.frontmatter.name}
            link={`/radios/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>
    </section>
  );
}
