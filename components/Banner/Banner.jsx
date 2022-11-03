import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import useRellax from "hooks/useRellax";
import styles from "./Banner.module.scss";

export default function Banner() {
  useRellax();

  return (
    <section>
      <div className={styles.bgWrap}>
        <Image
          alt="background image"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1080, 720))}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src="/various/collage.jpg"
        />
      </div>

      <div className={styles.frontText}>
        <div className={`animate ${styles.textShape}`}>
          <h1 className="header">Plant Bass'd</h1>

          <p className={styles.profileText}>
            Profiling the experimental dance music world and throwing parties in between.
          </p>
        </div>
      </div>
    </section>
  );
}
