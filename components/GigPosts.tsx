import { marked } from "marked";
import { guestList, headliners } from "arrays/previous-guests";

import styles from "styles/slug.module.scss";
import { Picture } from "./Picture";

interface GigPostsProps {
  alinks: string[];
  anames: string[];
  apics: string[];
  content: string;
  date: string;
  title: string;
}

const djs = guestList.concat(headliners);
const len = djs.length;

const artistLookUp = (name: string) => {
  for (let idx = 0; idx < len; idx++) {
    const record = djs[idx];
    if (name.toLowerCase() === record.name.toLowerCase()) {
      return (
        <div className="col-6 col-lg-6 col-md-6 col-6" key={record.name}>
          <Picture
            alt={`${record.name} press pic`}
            height={300}
            src={`/news/${record.img}`}
            width={300}
          />

          <a className="pinkUnderline px-1 py-2" href={`https://www.instagram.com/${record.link}`}>
            {record.name}
          </a>
        </div>
      );
    }
  }
};

export default function GigPosts(props: GigPostsProps) {
  const { anames = [], content, date, title } = props;
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
          <div className="row">{anames.map((name) => artistLookUp(name))}</div>
        </div>
      </div>
    </div>
  );
}
