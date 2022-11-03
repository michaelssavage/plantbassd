import PropTypes from "prop-types";

import { CardNoText } from "components/Card";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

export default function Takeover({ takeovers }) {
  return (
    <section className="takeoverSection col-lg-6 col-md-12">
      <h1 className="header" name="takeovers">
        Takeovers
      </h1>
      <p>Artists Pick Their Top Ten Spotify Selects</p>
      <div className="row g-2">
        {takeovers.map((artist) => (
          <CardNoText
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
            key={artist.frontmatter.title}
            link={`/takeovers/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>

      <DiscoverMoreBtn link="/takeovers" />
    </section>
  );
}

Takeover.propTypes = {
  takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
