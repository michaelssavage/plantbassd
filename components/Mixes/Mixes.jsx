import Image from "next/legacy/image";
import { Picture } from "components/Picture";
import styles from "./Mixes.module.scss";

export default function Mixes() {
  return (
    <section className="mixSection">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className={styles.mixImages}>
            <div className={styles.topImage}>
              <Picture alt="michael radio" height={360} src="/mixes/michael.png" width={360} />
            </div>
            <div className={styles.bottomImage}>
              <Image alt="oisin radio" height={360} src="/mixes/oisin.jpg" width={360} />
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
              EHFM, ITSNOTRADIO, and Aurora. Also find some House, Disco, and Groovy numbers on SET RADIO.
            </p>
            <p>
              Listen to all on our{" "}
              <a
                className="blackAnchor"
                href="https://soundcloud.com/plantbassddjs"
                rel="noopener noreferrer"
                target="_blank"
              >
                SoundCloud
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
