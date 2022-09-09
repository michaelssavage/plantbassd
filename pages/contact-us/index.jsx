import { shimmer, toBase64 } from "components/BlurImg";
import { socialIconList } from "arrays/SidebarIcons";
import Footer from "components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "components/SocialIcon";

import styles from "@/pageStyle/contact.module.scss";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <div className={styles.container}>
        <div className="row pb-4">
          <div className="col-lg-8 col-md-12">
            <h1 className={styles.header}>About Us</h1>

            <p>
              Plant Bass'd is spearheaded by Oisin Campbell, Michael Savage, and
              Peter Toal originating from Co. Monaghan, Ireland. The collective
              was started in early 2020 with the intention of playing parties
              and sharing music interests but quickly evolved into highlighting
              artists, releases, and club nights in the experimental dance music
              world.
            </p>
            <p>
              With shared interests and ambitions, the team looks towards
              creating unforgettable Plant Bass'd nights in Ireland and the UK.
            </p>

            <h2>Get In Touch:</h2>

            <div className="row">
              {socialIconList.map((item) => (
                <div className="col-6 col-sm-6 col-md-4" key={item.link}>
                  <Link href={item.link}>
                    <a className={`blackAnchor ${styles.iconBox}`}>
                      <SocialIcon
                        icon={item.icon}
                        styling={styles.socialIcon}
                      />{" "}
                      <div className={styles.iconText}>
                        {item.icon.toUpperCase()}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <Image
              alt="three lads"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(400, 400)
              )}`}
              // eslint-disable-next-line react/forbid-component-props
              className={styles.img}
              height={540}
              placeholder="blur"
              src="/various/hoodie.jpg"
              width={810}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
