import PropTypes from "prop-types";
import Link from "next/link";

import { CardNoText } from "components/Card";

export default function FreshJuice({ freshjuice }) {
  return (
    <section className="freshSection">
      <div className="row mb-2 align-items-center">
        <h1 className="col me-auto mb-0" name="fresh-juice">
          Fresh Juice
        </h1>

        <div className="col-auto ps-0">
          <Link href="/fresh-juice" className="text-nowrap btn btn-outline-dark" role="button">
            More
          </Link>
        </div>
      </div>

      <div className="row mb-2">
        <p>New Music Releases Around The World</p>
      </div>

      <div className="row g-2">
        {freshjuice.map((artist) => (
          <CardNoText key={artist.frontmatter.name} link={`/fresh-juice/${artist.slug}`} post={artist} />
        ))}
      </div>
    </section>
  );
}

FreshJuice.propTypes = {
  freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
