import Link from "next/link";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface Props {
  link: string;
  post: {
    title: string;
    pic: string;
    bio: string;
    date: string;
  };
  columns?: string;
}

export const CardCover = (props: Props) => {
  const { post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" } = props;
  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card ${styles.container}`}>
          <Picture alt={post.title} size={500} src={post.pic} />

          <div className={`${styles.cover} card-body`}>
            <p className={styles.textInCover}>{post.title}</p>
            <p className={styles.cardBio}>{post.bio}</p>
            <p className={styles.cardDate}>{post.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
