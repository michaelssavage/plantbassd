import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./News.module.scss";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

export default function NewsPreviews({ otherNews }) {
  return (
    <>
      <div className={`row list-group list-group-flush ${styles.listHorizontal}`}>
        {otherNews.map((story) => (
          <Link href={`/${story.frontmatter.path}/${story.slug}`} key={story.frontmatter.title}>
            <a className={`newsPreview ${styles.anchorList}`}>
              <div className={`list-group-item flex-fill ${styles.cardList}`} key={story.frontmatter.title}>
                {story.frontmatter.date} {"// "}
                {story.frontmatter.title}
              </div>
            </a>
          </Link>
        ))}
      </div>

      <DiscoverMoreBtn link="/news" />
    </>
  );
}

NewsPreviews.propTypes = {
  otherNews: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
