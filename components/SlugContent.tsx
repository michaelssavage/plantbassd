import { marked } from "marked";
import styles from "styles/slug.module.scss";

interface ContentProps {
  content: string;
  date: string;
  title: string;
}

export default function Content({ date, title, content }: ContentProps) {
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
