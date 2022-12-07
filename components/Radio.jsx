import PropTypes from "prop-types";

import { CardNoText } from "components/Card";
import Link from "next/link";

export default function Radio({ radios }) {
  return (
    <section className="radioSection col-lg-6 col-md-12">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto mb-0" name="radios">
          Radios
        </h1>

        <div className="col-auto px-0">
          <Link href="/radios">
            <a className="text-nowrap btn btn-outline-dark" role="button">
              More
            </a>
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

Radio.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
