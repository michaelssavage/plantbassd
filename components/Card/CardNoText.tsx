import Link from "next/link";
import { Picture } from "components/Picture";
import { NewsProps } from "types/frontmatter";
import styles from "./Card.module.scss";

interface CardProps {
  columns: string;
  link: string;
  post: NewsProps;
}

export const CardNoText = (props: CardProps) => {
  const { columns = "col-6 col-md-6 col-lg-6 col-xl-3", post, link } = props;

  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card ${styles.cardStyle}`}>
          <Picture alt={post.frontmatter.title} height={500} src={post.frontmatter.pic} width={500} />
        </div>
      </Link>
    </div>
  );
};
