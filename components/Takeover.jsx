import PropTypes from "prop-types";

import CardNoText from "@/cards/CardNoText";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import styles from "@/styles/components.module.scss";

export default function Takeover({ takeovers }) {
  return (
    <section className={styles.bgPink}>
      <div className="container">
        <h1 className="header" name="takeovers">
          Takeovers
        </h1>
        <p>Artists Pick Their Top Ten Spotify Selects</p>
        <div className="row g-2">
          {takeovers.map((artist) => (
            <CardNoText
              key={artist.frontmatter.title}
              link={`/takeovers/${artist.slug}`}
              post={artist}
            />
          ))}
        </div>

        <DiscoverMoreBtn link="/takeovers" />
      </div>
    </section>
  );
}

Takeover.propTypes = {
  takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
