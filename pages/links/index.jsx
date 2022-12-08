import { linkList } from "arrays/linktree";
import socialIconList from "arrays/social-icons";
import Head from "next/head";
import Link from "next/link";
import SocialIcon from "components/SocialIcon";
import { Picture } from "components/Picture";
import styles from "./links.module.scss";

const mainLinks = [
  {
    title: "Plantbass'd & Friends Top Ten Releases 2022",
    link: "https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf?si=0bc133bf8a90485b",
    icon: "spotify",
  },
  {
    title: "Plant Bass'd Soundcloud",
    link: "https://soundcloud.com/plantbassddjs",
    icon: "soundcloud",
  },
  {
    title: "Get In Contact",
    link: "/team#get-in-touch",
    icon: "contact us",
  },
  {
    title: "Plant Bass'd Home",
    link: "/",
    icon: "site",
  },
];

export default function Links() {
  return (
    <>
      <Head>
        <title>Plant Bass'd Links</title>
      </Head>
      <div className={styles.linkPage}>
        <div className={styles.pushSides}>
          <div className={`row ${styles.pbLogo}`}>
            <Picture alt="plant bass'd logo" height={150} src="/various/pb_white.png" width={150} />
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

          <h2 className="d-flex justify-content-end">Articles & Tracks</h2>
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
          <h2 className="d-flex justify-content-end"> Main Links</h2>
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
