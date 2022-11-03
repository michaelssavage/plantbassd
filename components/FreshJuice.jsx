import PropTypes from "prop-types";

import { CardNoText } from "components/Card";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

export default function FreshJuice({ freshjuice }) {
  return (
    <section className="freshSection">
      <h1 className="header" name="fresh-juice">
        Fresh Juice
      </h1>
      <p>New Music Releases Around The World</p>
      <div className="row g-2">
        {freshjuice.map((artist) => (
          <CardNoText key={artist.frontmatter.title} link={`/fresh-juice/${artist.slug}`} post={artist} />
        ))}
      </div>

      <DiscoverMoreBtn link="/fresh-juice" />
    </section>
  );
}

FreshJuice.propTypes = {
  freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
