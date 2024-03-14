import { SimpleCard } from "components/Card";
import { PostProps } from "types/frontmatter";
import { Button } from "components/Button";
import { Header } from "components/Header";

export const Radar = ({ radar }: { radar: PostProps[] }) => {
  return (
    <section className="radioSection col-lg-6 col-md-12">
      <div className="row mb-2 align-items-center">
        <Header first="Radar" />

        <div className="col-auto ps-0">
          <Button to="/under-the-radar" text="More" />
        </div>
      </div>

      <div className="row mb-2">
        <p>End of month roundups that went under your radar.</p>
      </div>

      <div className="row g-2">
        {radar.map((artist) => (
          <SimpleCard
            key={artist.frontmatter.name}
            link={`/under-the-radar/${artist.slug}`}
            post={artist}
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
          />
        ))}
      </div>
    </section>
  );
};
