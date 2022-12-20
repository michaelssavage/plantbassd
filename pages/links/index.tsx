import Head from "next/head";
import Link from "next/link";
import { linkList, mainLinks } from "arrays/linktree";
import { socialIcons } from "arrays/social-icons";
import SocialIcon from "components/SocialIcon";
import Header from "components/Header";
import styles from "./Links.module.scss";

export default function Links() {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <div className={styles.linkPage}>
        <div className={styles.pushSides}>
          <div className={`row ${styles.pbLogo}`}>
            <Header first="Plant" second="Bass'd" />
          </div>

          <div className="row">
            {socialIcons.map((item) => (
              <div className={`col ${styles.iconContainer}`} key={item.link}>
                <Link href={item.link}>
                  <SocialIcon icon={item.icon} styling={styles.socialIcon} />
                </Link>
              </div>
            ))}
          </div>

          <hr />

          <h2 className="d-flex justify-content-end">Most Recent</h2>
          {linkList.map((item) => (
            <div className={`row ${styles.buttonStyle}`} key={item.title}>
              <div className={styles.linkTitle}>
                <SocialIcon icon={item.icon} styling={styles.linkIcon} />
                <div>{item.icon.toUpperCase()}</div>
              </div>
              <a
                className={`btn btn-outline-dark ${styles.btnText}`}
                href={item.link}
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <div>{item.title}</div>
              </a>
            </div>
          ))}
          <h2 className="d-flex justify-content-end">Discovery</h2>
          {mainLinks.map((item) => (
            <div className={`row ${styles.buttonStyle}`} key={item.title}>
              <div className={styles.linkTitle}>
                <SocialIcon icon={item.icon} styling={styles.linkIcon} />
                <div>{item.icon.toUpperCase()}</div>
              </div>
              <a
                className={`btn btn-outline-dark ${styles.btnText}`}
                href={item.link}
                rel="noopener noreferrer"
                role="button"
                target="_blank"
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
