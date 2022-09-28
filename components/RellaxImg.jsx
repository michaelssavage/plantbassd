import { shimmer, toBase64 } from "components/BlurImg";
import { useEffect } from "react";
import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";
import Image from "next/image";
import Rellax from "rellax";
import styles from "@/styles/rellax.module.scss";

export default function RellaxImg() {
  useEffect(() => {
    // eslint-disable-next-line new-cap, no-new
    new Rellax(".animate", {
      center: false,
      horizontal: false,
      round: true,
      speed: -5,
      vertical: true,
      wrapper: null,
    });
  }, []);

  return (
    <section>
      <div className={styles.bgWrap}>
        <Image
          alt="background image"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1080, 720)
          )}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src="/various/bg.jpg"
        />
      </div>

      <div className={styles.frontText}>
        <div className={`animate ${styles.textShape}`}>
          <h1 className="header">Plant Bass'd</h1>

          <p className={styles.profileText}>
            Profiling the experimental dance music world and throwing parties in
            between.
          </p>
          <div className={styles.btns}>
            <DiscoverMoreBtn link="/contact-us" title="About us" />
            <DiscoverMoreBtn link="/gigs" title="Gigs" />
            <DiscoverMoreBtn
              link="https://www.instagram.com/plantbassd___/"
              title="Instagram"
            />
            <DiscoverMoreBtn link="/previous-guests" title="Previous Guests" />
          </div>
        </div>
      </div>
    </section>
  );
}
