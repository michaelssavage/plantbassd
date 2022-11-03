import { Picture } from "components/Picture";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const CardWithText = ({ post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" }) => {
  return (
    <div className={columns}>
      <Link href={link}>
        <a className="anchorColor">
          <div className={`card ${styles.cardStyle}`}>
            <Picture alt={post.frontmatter.title} height={500} src={post.frontmatter.pic} width={500} />
            <div className={`${styles.cardBody} card-body`}>
              <p className={styles.cardDate}>{post.frontmatter.date}</p>
              <p className={styles.cardTitle}>{post.frontmatter.bio}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

CardWithText.propTypes = {
  columns: PropTypes.string,
  link: PropTypes.string.isRequired,
  post: PropTypes.instanceOf(Object).isRequired,
};
