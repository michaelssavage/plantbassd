import { Picture } from "components/Picture";
import { Button } from "components/Button";
import styles from "./Card.module.scss";

interface CardProps {
  pic: string;
  title: string;
  artist: string;
  page: string; // page links to artist
  insta: string;
  link: string; // link is to instagram
}

/**
 * StickyCard is used in the Slug component
 */
export const StickyCard = (props: CardProps) => {
  const { pic, title, artist, page, insta, link } = props;

  return (
    <div className="col">
      <div className={styles.newsImage}>
        <Picture alt={title} size={600} src={pic} />
        <div className={`row ${styles.widthOverride}`}>
          {page && (
            <div className="col-6">
              <Button to={page} text={artist} />
            </div>
          )}
          <div className="col-6">
            <Button to={link} text={insta} />
          </div>
        </div>
      </div>
    </div>
  );
};
