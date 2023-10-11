import Link from "next/link";
import { socialIcons } from "arrays/social-icons";

import { Icon } from "components/Icon";
import { Picture } from "components/Picture";
import styles from "styles/team.module.scss";
import { ourTeam } from "arrays/our-team";
import PageTitle from "components/PageTitle";
import card from "components/Card/Card.module.scss";

export default function TeamPage() {
  return (
    <div className={styles.aboutBG}>
      <PageTitle title="Our Team" />

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className={styles.stickyPosition}>
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
              Plant Bass'd events across Ireland and the UK. Oisín has been a force to reckon with
              in Scotland, organising events in Glasgow and Scotland successfully with the likes of
              Amor Satyr, DJ Mell G, Kessler, Martyn Bootyspoon, Two Shell, TAAHLIAH and many more
              talented creatives. The Plant Bass'd night out has received 4 Resident Advisor Top
              Picks due to his hard work and diligence.
            </p>
            <p>
              Across the pond, past events have been organised in Dublin and, more recently, in
              Galway where Peter and Michael both reside. The trio work together online to highlight
              underground music in the 'Under The Radar' series each month, premiere up and coming
              artists on SoundCloud, and write about interests ranging from festivals, labels, and
              movements.
            </p>
            <div className="row pb-3">
              <h3>Social Media:</h3>
              {socialIcons.map(({ link, name }) => (
                <div key={link} className={styles.icons}>
                  <Link
                    href={link}
                    className={styles.iconBox}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className={styles.iconAndText}>
                      <Icon icon={name} styling={styles.socialIcon} />
                      <p>{name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          {ourTeam.map(({ img, link, name }) => (
            <div key={name} className={card.cardStyle}>
              <Link href={link}>
                <Picture alt={name} size={1000} src={`/gigs/${img}`} />
              </Link>
              <p className={styles.player}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
