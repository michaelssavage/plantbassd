import Image from "next/legacy/image";
import Link from "next/link";
import { Picture } from "components/Picture";
import Header from "components/Header";
import styles from "./Gigs.module.scss";

export const Gigs = () => {
  return (
    <section className="mixSection">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-1 order-2">
          <div className={styles.mixImages}>
            <div className={styles.topImage}>
              <Picture alt="Kessler gig poster" size={360} src="/news/30-kessler.jpg" />
            </div>
            <div className={styles.bottomImage}>
              <Image
                alt="DJ Mell G gig poster"
                height={360}
                src="/news/24-mell-g.jpg"
                width={360}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 order-lg-2 order-1">
          <div className={styles.clubDescriptor}>
            <div className="row mb-2 align-items-center">
              <Header first="Gigs" />

              <div className="col-auto ps-0">
                <Link href="/gigs" className="text-nowrap btn btn-outline-dark" role="button">
                  More
                </Link>
              </div>
            </div>
            <p>
              Serving up the hot club sounds of ballroom, US club, electro, ghetto tech, footwork,
              techno & more on in Glasgow, Edinburgh, and Dublin, Plant Bass'd has gathered friends
              far and near for sweaty dancefloor parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
