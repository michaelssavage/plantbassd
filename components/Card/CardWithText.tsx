import Link from "next/link";
import { CardProps } from "types/frontmatter";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface Props {
  columns?: string;
  link: string;
  post: CardProps;
}

export const CardWithText = (props: Props) => {
  const { post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" } = props;
  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card ${styles.cardStyle}`}>
          <Picture
            alt={post.frontmatter.title}
            height={500}
            src={post.frontmatter.pic}
            width={500}
          />
          <div className={`${styles.cardBody} card-body`}>
            <p className={styles.cardDate}>{post.frontmatter.date}</p>
            <p className={styles.cardTitle}>{post.frontmatter.bio}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};