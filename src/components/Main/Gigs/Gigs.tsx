import Link from "next/link";
import { Picture } from "components/Picture";
import { Header } from "components/Header";
import { Button } from "components/Button";
import { AllPostProps } from "types/frontmatter";
import card from "components/Card/Card.module.scss";
import styles from "./Gigs.module.scss";

interface Props {
  gigs: AllPostProps[];
}

export const Gigs = ({ gigs }: Props) => {
  return (
    <section className="mixSection">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-1 order-2">
          <div className={styles.mixImages}>
            <Link href={`gigs/${gigs[1].slug}`}>
              <div className={`${styles.topImage} ${card.cardStyle}`}>
                <Picture alt={gigs[1].frontmatter.title} size={360} src={gigs[1].frontmatter.pic} />
              </div>
            </Link>
            <Link href={`gigs/${gigs[0].slug}`}>
              <div className={`${styles.bottomImage} ${card.cardStyle}`}>
                <Picture alt={gigs[0].frontmatter.title} size={360} src={gigs[0].frontmatter.pic} />
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 order-lg-2 order-1">
          <div className={styles.clubDescriptor}>
            <div className="row mb-2 align-items-center">
              <Header first="Gigs" />

              <div className="col-auto ps-0">
                <Button to="/gigs" text="More" />
              </div>
            </div>
            <p>
              Plant Bass'd has gathered friends far and near for sweaty dancefloor parties, serving
              up the hottest club sounds of ballroom, US club, electro, ghetto tech, footwork,
              techno & more on in Glasgow, Edinburgh, and Galway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
