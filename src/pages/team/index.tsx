import Link from "next/link";
import { socialIcons } from "arrays/social-icons";
import { Picture } from "components/Picture";
import { ourTeam } from "arrays/our-team";
import PageMetaData from "components/PageMetaData";
import card from "components/Card/Card.module.scss";
import { Loading } from "components/Loading";
import styles from "styles/team.module.scss";

export default function TeamPage() {
  return (
    <div className={styles.aboutBG}>
      <PageMetaData title="Our Team" />

      <div className="row">
        <Loading>
          <div className="col-12 col-sm-5">
            {ourTeam.map(({ img, link, name }) => (
              <div key={name} className={card.cardStyle}>
                <Link href={link}>
                  <Picture alt={name} size={1000} src={`/gigs/${img}`} />
                </Link>
                <p className={styles.member}>{name}</p>
              </div>
            ))}
          </div>
        </Loading>
        <div className="col-12 col-sm-7">
          <div className={styles.biography}>
            <h1 className={styles.pageHeader}>Our Team</h1>
            <p>
              In early 2020, Oisín Campbell, Michael Savage, and Peter Toal from Co. Monaghan,
              Ireland came together to form Plant Bass'd. Initially, the collective wanted to focus
              on sharing their love for music and throwing parties. However, it soon developed into
              something bigger, with a mission to showcase artists, releases, and club nights in the
              experimental dance music world.
            </p>
            <p>
              The team shares a common goal and passion, and they aspire to create unforgettable
              Plant Bass'd events across Ireland and Scotland. Oisín has been a force to reckon with
              in Scotland, organising big events in Edinburgh and Glasgow with the likes of Amor
              Satyr, DJ Mell G, Kessler, Martyn Bootyspoon, Two Shell, TAAHLIAH and many more
              talented creatives. The Plant Bass'd night out has received 4 Resident Advisor Top
              Picks in 2023 due to his hard work and diligence. Across the pond, past events have
              been organised in Dublin and, more recently, in Galway where Peter and Michael both
              reside.
            </p>
            <p>
              The trio work closely together online to highlight underground music in the 'Under The
              Radar' series each month, premiere up and coming artists on SoundCloud, and write
              about interests ranging from festivals, forward-thinking labels, and movements.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={styles.socials}>
          {socialIcons.map(({ link, name, icon }) => (
            <Link
              key={link}
              href={link}
              className={`col-6 col-sm-4 col-md-3 ${styles.iconBox}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{icon}</span>
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
