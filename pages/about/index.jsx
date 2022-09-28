import { shimmer, toBase64 } from "components/BlurImg";
import { socialIconList } from "arrays/SidebarIcons";
import Footer from "components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "components/SocialIcon";
import styles from "@/pageStyle/page.module.scss";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <div className="aboutBG">
        <h1 className={styles.pageHeader}>About Us</h1>

        <p>
          Plant Bass'd is spearheaded by Oisin Campbell, Michael Savage, and
          Peter Toal originating from Co. Monaghan, Ireland. The collective was
          started in early 2020 with the intention of playing parties and
          sharing music interests but quickly evolved into highlighting artists,
          releases, and club nights in the experimental dance music world.
        </p>
        <p>
          With shared interests and ambitions, the team looks towards creating
          unforgettable Plant Bass'd nights in Ireland and the UK.
        </p>

        <div className="text-center">
          <Image
            alt="image of oisin, michael and peter"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(400, 400)
            )}`}
            // eslint-disable-next-line react/forbid-component-props
            className="rounded"
            height={300}
            placeholder="blur"
            src="/various/hoodie.jpg"
            width={480}
          />
        </div>
        <h2>Get In Touch:</h2>

        <div className="row">
          {socialIconList.map((item) => (
            <div className="col-6 col-sm-6 col-md-4" key={item.link}>
              <Link href={item.link}>
                <a className={`blackAnchor ${styles.iconBox}`}>
                  <SocialIcon icon={item.icon} styling={styles.socialIcon} />{" "}
                  <div className={styles.iconText}>
                    {item.icon.toUpperCase()}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
