import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";

import styles from "./Mixes.module.scss";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

export default function ArtistCard() {
  return (
    <section className="mixSection">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className={styles.mixImages}>
            <div className={styles.topImage}>
              <Image
                alt="michael radio"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
                height={400}
                placeholder="blur"
                src="/mixes/michael.png"
                width={400}
              />
            </div>
            <div className={styles.bottomImage}>
              <Image
                alt="oisin radio"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
                height="400"
                placeholder="blur"
                src="/mixes/oisin.jpg"
                width="400"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className={styles.clubDescriptor}>
            <h1 className="header" name="mixes">
              Mixes
            </h1>
            <p>
              Serving up the hot club sounds of ballroom, US club, electro, ghetto tech, footwork, techno & more on
              EHFM, ITSNOTRADIO, and Aurora. Also find some House, Disco, and Groovy numbers on SET RADIO. Listen to all
              on our{" "}
              <a
                className="blackAnchor"
                href="https://soundcloud.com/plantbassddjs"
                rel="noopener noreferrer"
                target="_blank"
              >
                Soundcloud
              </a>
              .
            </p>

            <DiscoverMoreBtn external link="https://soundcloud.com/plantbassddjs" />
          </div>
        </div>
      </div>
    </section>
  );
}
