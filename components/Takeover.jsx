import PropTypes from "prop-types";

import { CardNoText } from "components/Card";
import Link from "next/link";

export default function Takeover({ takeovers }) {
  return (
    <section className="takeoverSection col-lg-6 col-md-12">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto mb-0" name="takeovers">
          Takeovers
        </h1>
        <div className="col-auto px-0">
          <Link href="/takeovers">
            <a className="text-nowrap btn btn-outline-dark" role="button">
              More
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>Artists, Friends, and Guests pick their Top Ten Spotify Selects</p>
      </div>

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
    </section>
  );
}

Takeover.propTypes = {
  takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
