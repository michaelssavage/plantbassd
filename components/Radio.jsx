import PropTypes from "prop-types";

import { CardNoText } from "components/Card";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

export default function Radio({ radios }) {
  return (
    <section className="radioSection col-lg-6 col-md-12">
      <h1 className="header" name="radios">
        Guest Radio
      </h1>
      <p>Plant Bass'd Radio Mixes</p>
      <div className="row g-2">
        {radios.map((artist) => (
          <CardNoText
            columns="col-6 col-md-6 col-lg-6 col-xl-6"
            key={artist.frontmatter.title}
            link={`/radios/${artist.slug}`}
            post={artist}
          />
        ))}
      </div>

      <DiscoverMoreBtn link="/radios" />
    </section>
  );
}

Radio.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
