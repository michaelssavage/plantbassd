import Link from "next/link";
import { PostProps } from "types/frontmatter";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface Props {
  link: string;
  post: PostProps;
  columns?: string;
}

export const TextCard = ({ post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" }: Props) => {
  const { title, pic, bio, date } = post.frontmatter;
  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card border-0 h-100 ${styles.cardStyle}`}>
          <Picture
            alt={title}
            size={500}
            src={pic}
            style={{
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
          />
          <div className={`${styles.cardBody} card-body`}>
            <p className={styles.cardTitle}>{bio}</p>
            <p className={styles.cardDate}>{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
