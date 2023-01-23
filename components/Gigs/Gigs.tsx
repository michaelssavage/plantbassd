import { marked } from "marked";
import { guestList, headliners } from "arrays/previous-guests";
import styles from "styles/slug.module.scss";
import { ArtistLookUp } from "./ArtistLookUp";

const djs = guestList.concat(headliners);
const len = djs.length;

export const Gigs = (anames: string[], content: string, date: string, title: string) => {
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
          <div className="row">{anames.map((name) => ArtistLookUp(name, len, djs))}</div>
        </div>
      </div>
    </div>
  );
};
