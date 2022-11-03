import { Picture } from "components/Picture";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const CardNoText = ({ post, link }) => {
  return (
    <div className="col-6 col-md-6 col-lg-6 col-xl-3">
      <Link href={link}>
        <a className="anchorColor">
          <div className={`card ${styles.cardStyle}`}>
            <Picture alt={post.frontmatter.title} height={500} src={post.frontmatter.pic} width={500} />
          </div>
        </a>
      </Link>
    </div>
  );
};

CardNoText.propTypes = {
  link: PropTypes.string.isRequired,
  post: PropTypes.instanceOf(Object).isRequired,
};
