import { linkList } from "arrays/linktree";
import { shimmer, toBase64 } from "components/BlurImg";
import { socialIconList } from "arrays/SidebarIcons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "components/SocialIcon";

import styles from "@/pageStyle/links.module.scss";

export default function Links() {
  return (
    <>
      <Head>
        <title>Plant Bass'd Links</title>
      </Head>
      <div className={styles.linkPage}>
        <div className={styles.pushSides}>
          <div className={`row ${styles.pbLogo}`}>
            <Image
              alt="plant bass'd logo"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(400, 400)
              )}`}
              height={60}
              placeholder="blur"
              src="/various/logo_circle.png"
              width={60}
            />
          </div>

          <div className="row text-center">
            <h1 className={styles.linkHeading}>PLANT BASS'D</h1>
          </div>

          <div className="row">
            {socialIconList.map((item) => (
              <div className={`col ${styles.iconContainer}`} key={item.link}>
                <Link href={item.link}>
                  <a>
                    <SocialIcon icon={item.icon} styling={styles.socialIcon} />
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <hr />

          {linkList.map((item) => (
            <div className={`row ${styles.buttonStyle}`} key={item.title}>
              <div className={styles.linkTitle}>
                <SocialIcon icon={item.icon} styling={styles.linkIcon} />
                <div>{item.icon.toUpperCase()}</div>
              </div>
              <a
                className={`btn btn-outline-dark ${styles.btnText}`}
                href={item.link}
                role="button"
              >
                <div>{item.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
