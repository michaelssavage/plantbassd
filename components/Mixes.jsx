import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import styles from "@/styles/mixes.module.scss";

export default function ArtistCard() {
  return (
    <section className={styles.mixSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className={styles.mixImages}>
              <div className={styles.topImage}>
                <Image
                  alt="michael radio"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(400, 400)
                  )}`}
                  height={400}
                  placeholder="blur"
                  src="/mixes/michael.png"
                  width={400}
                />
              </div>
              <div className={styles.bottomImage}>
                <Image
                  alt="oisin radio"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(400, 400)
                  )}`}
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
                Serving up the hot club sounds of ballroom, US club, electro,
                ghetto tech, footwork, techno & more. Listen on EHFM,
                ITSNOTRADIO, and Aurora, and our Soundcloud
              </p>

              <p>
                Find some House, Disco, and Groovy numbers on SET RADIO and our
                Soundcloud too!
              </p>

              <DiscoverMoreBtn link="https://soundcloud.com/plantbassddjs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
