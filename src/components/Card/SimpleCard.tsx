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

export const SimpleCard = (props: Props) => {
  const { post, link, columns = "col-6 col-sm-6 col-md-6 col-lg-3" } = props;
  return (
    <div className={columns}>
      <Link href={link} className="anchorColor">
        <div className={`card h-100 ${styles.cardStyle}`}>
          <Picture
            alt={post.frontmatter.title}
            size={500}
            src={post.frontmatter.pic}
            style={{ borderRadius: "0.375rem" }}
          />
        </div>
      </Link>
    </div>
  );
};
