import Link from "next/link";
import { CardProps } from "types/frontmatter";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface Props {
  link: string;
  post: CardProps;
  columns?: string;
  text?: boolean;
}

export const Card = (props: Props) => {
  const { post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3", text } = props;
  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card ${styles.cardStyle}`}>
          <Picture alt={post.frontmatter.title} size={500} src={post.frontmatter.pic} />
          {text && (
            <div className={`${styles.cardBody} card-body`}>
              <p className={styles.cardDate}>{post.frontmatter.date}</p>
              <p className={styles.cardTitle}>{post.frontmatter.bio}...</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
