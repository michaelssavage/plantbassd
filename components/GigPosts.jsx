import { marked } from "marked";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@/pageStyle/slug.module.scss";

export default function GigPosts({
  alinks = [],
  anames = [],
  apics = [],
  content,
  date,
  title,
}) {
  return (
    <div
      className={`
				${styles.postContent}
				col-lg-6
				col-md-12
				col-xl-6 
				`}
    >
      <p className={styles.postDate}>Posted on {date}</p>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postBody}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        />
        <div className="container">
          <div className="row">
            {anames.map((name, idx) => (
              <div className="col-6 col-lg-6 col-md-6 col-6" key={name}>
                <Image
                  alt={`${name} press pic`}
                  height="300"
                  src={`/news/${apics[idx]}`}
                  width="300"
                />
                <a className="blackAnchor px-1 py-2" href={alinks[idx]}>
                  {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

GigPosts.propTypes = {
  alinks: PropTypes.arrayOf(PropTypes.string),
  anames: PropTypes.arrayOf(PropTypes.string),
  apics: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
