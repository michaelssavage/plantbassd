import PropTypes from "prop-types";
import Link from "next/link";

import { CardNoText } from "components/Card";

export default function FreshJuice({ freshjuice }) {
  return (
    <section className="freshSection">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto heading mb-0" name="fresh-juice">
          Fresh Juice
        </h1>
        <div className="col-auto">
          <Link href="/fresh-juice">
            <a className="text-nowrap btn btn-outline-dark" role="button">
              View More
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>New Music Releases Around The World</p>
      </div>

      <div className="row g-2">
        {freshjuice.map((artist) => (
          <CardNoText key={artist.frontmatter.title} link={`/fresh-juice/${artist.slug}`} post={artist} />
        ))}
      </div>
    </section>
  );
}

FreshJuice.propTypes = {
  freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
