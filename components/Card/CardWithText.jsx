import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const CardWithText = ({ post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" }) => {
  return (
    <div className={columns}>
      <Link href={link}>
        <a className="anchorColor">
          <div className={`card ${styles.cardStyle}`}>
            <Image
              alt={post.frontmatter.title}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
              // eslint-disable-next-line react/forbid-component-props
              className="card-img-top"
              height={500}
              placeholder="blur"
              src={post.frontmatter.pic}
              width={500}
            />
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
