import socialIconList from "arrays/social-icons";
import Footer from "components/Footer";
import Head from "next/head";
import Link from "next/link";
import SocialIcon from "components/SocialIcon";
import { Picture } from "components/Picture";
import styles from "@/pageStyle/page.module.scss";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team</title>
      </Head>

      <div className="aboutBG">
        <h1 className={styles.pageHeader}>Our Team</h1>

        <p>
          Plant Bass'd is spearheaded by Oisin Campbell, Michael Savage, and Peter Toal originating from Co. Monaghan,
          Ireland. The collective was started in early 2020 with the intention of playing parties and sharing music
          interests but quickly evolved into highlighting artists, releases, and club nights in the experimental dance
          music world.
        </p>
        <p>
          With shared interests and ambitions, the team looks towards creating unforgettable Plant Bass'd nights in
          Ireland and the UK.
        </p>

        <div className="text-center">
          <Picture alt="image of oisin, michael and peter" height={300} src="/various/hoodie.jpg" width={480} />
        </div>
        <h2>Get In Touch:</h2>

        <div className="row">
          {socialIconList.map((item) => (
            <div className="col-6 col-sm-6 col-md-4" key={item.link}>
              <Link href={item.link}>
                <a className={`blackAnchor ${styles.iconBox}`}>
                  <SocialIcon icon={item.icon} styling={styles.socialIcon} />{" "}
                  <div className={styles.iconText}>{item.icon.toUpperCase()}</div>
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
