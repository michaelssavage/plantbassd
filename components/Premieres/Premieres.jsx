import Image from "next/image";
import { shimmer, toBase64 } from "components/BlurImg";
import styles from "./Premieres.module.scss";

export default function Premieres() {
  return (
    <section>
      <div className={styles.bgWrap}>
        <Image
          alt="background image"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1080, 720))}`}
          layout="fill"
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          src="/various/bg.jpg"
        />
        <p className={styles.bgText}>
          New club sizzling sounds premiered on Plant bass'd showcasing rave music across the globe. Find some high NRG,
          mutating bass and foowork numbers here.
        </p>
      </div>
    </section>
  );
}
