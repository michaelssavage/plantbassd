import { marked } from "marked";

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

export default function GigPosts(props: GigPostsProps) {
  const { alinks = [], anames = [], apics = [], content, date, title } = props;
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
                <Picture
                  alt={`${name} press pic`}
                  height={300}
                  src={`/news/${apics[idx]}`}
                  width={300}
                />

                <a className="pinkUnderline px-1 py-2" href={alinks[idx]}>
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
