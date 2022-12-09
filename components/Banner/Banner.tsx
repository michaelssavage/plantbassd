import Image from "next/image";
import { CSSProperties } from "react";
import { shimmer, toBase64 } from "components/BlurImg";
import useRellax from "hooks/useRellax";
import styles from "./Banner.module.scss";

export default function Banner() {
  useRellax();

  const css: CSSProperties = { objectFit: "cover" };

  return (
    <section>
      <div className={styles.bgWrap}>
        <Image
          alt="background image"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1080, 720))}`}
          style={css}
          placeholder="blur"
          src="/various/collage.jpg"
          fill
          priority
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
