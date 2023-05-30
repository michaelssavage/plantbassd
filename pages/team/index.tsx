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
              Plant Bass'd events across Ireland and the UK.
            </p>
            <div className="row">
              <div className={styles.icons}>
                {socialIcons.map(({ link, name }) => (
                  <Link
                    href={link}
                    key={link}
                    className={styles.iconBox}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={name} styling={styles.socialIcon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          {ourTeam.map(({ img, link, name }) => (
            <div key={name} className={card.cardStyle}>
              <Link href={link}>
                <Picture alt={name} size={1000} src={`/news/${img}`} />
              </Link>
              <p className="smallTextForTeamPics">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
