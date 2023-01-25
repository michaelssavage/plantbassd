import Link from "next/link";
import { Picture } from "components/Picture";
import { CardProps } from "types/frontmatter";
import styles from "./Card.module.scss";

interface Props {
  columns?: string;
  link: string;
  post: CardProps;
}

export const CardNoText = (props: Props) => {
  const { columns = "col-6 col-md-6 col-lg-6 col-xl-3", post, link } = props;

  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card ${styles.cardStyle}`}>
          <Picture alt={post.frontmatter.title} size={500} src={post.frontmatter.pic} />
        </div>
      </Link>
    </div>
  );
};
