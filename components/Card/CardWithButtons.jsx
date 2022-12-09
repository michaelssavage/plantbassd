import Link from "next/link";
import PropTypes from "prop-types";
import { Picture } from "components/Picture";
import news from "styles/slug.module.scss";

export const CardWithButtons = ({ pic, title, artist, page, insta, link }) => {
  return (
    <div className="col">
      <div className={news.newsImage}>
        <Picture alt={title} height={500} src={pic} width={500} />
        <div className="row">
          <div className={`col ${news.button}`}>
            <Link
              href={page}
              className={`${news.hoverLink} text-nowrap btn btn-outline-dark`}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              {artist}
            </Link>
          </div>
          <div className={`col ${news.button}`}>
            <Link
              href={link}
              className={`${news.hoverLink} text-nowrap btn btn-outline-dark`}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              {insta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardWithButtons.propTypes = {
  artist: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
