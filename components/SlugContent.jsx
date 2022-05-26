import { marked } from "marked";
import PropTypes from "prop-types";
import styles from "@/pageStyle/slug.module.scss";

export default function Content({ date, title, content }) {
  return (
    <div
      className={`
				${styles.postContent}
				col-lg-7
				col-md-12
				col-xl-7 
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
      </div>
    </div>
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
