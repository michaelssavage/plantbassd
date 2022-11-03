import Link from "next/link";
import PropTypes from "prop-types";

export default function DiscoverMoreBtn({ external, link, title = "Discover More" }) {
  return (
    <div className="globalBottomBtn">
      <Link href={link}>
        {external ? (
          <a
            className="text-nowrap btn btn-outline-dark btn-lg"
            rel="noopener noreferrer"
            role="button"
            target="_blank"
          >
            {title}
          </a>
        ) : (
          <a className="text-nowrap btn btn-outline-dark btn-lg" role="button">
            {title}
          </a>
        )}
      </Link>
    </div>
  );
}

DiscoverMoreBtn.propTypes = {
  external: PropTypes.bool,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
};
