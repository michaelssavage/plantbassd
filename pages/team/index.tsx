import Link from "next/link";
import { socialIcons } from "arrays/social-icons";

import { Icon } from "components/Icon";
import { Picture } from "components/Picture";
import styles from "styles/page.module.scss";
import { ourTeam } from "arrays/our-team";
import PageTitle from "components/PageTitle";

export default function TeamPage() {
  return (
    <div className="aboutBG">
      <PageTitle title="Our Team" />
      <h1 className={styles.pageHeader}>Our Team</h1>

      <p>
        Plant Bass'd was spearheaded by Oisín Campbell, Michael Savage, and Peter Toal originating
        from Co. Monaghan, Ireland. The collective was started in early 2020 with the intention of
        playing parties and sharing music interests but quickly evolved into highlighting artists,
        releases, and club nights in the experimental dance music world.
      </p>
      <p>
        With shared interests and ambitions, the team looks towards creating unforgettable Plant
        Bass'd nights in Ireland and the UK.
      </p>

      <div className="row d-flex flex-row">
        {ourTeam.map((member) => (
          <div className="px-5 col-lg-6 col-md-6 col-sm-12" key={member.name}>
            <Link href={member.link}>
              <div className={`card ${styles.cardStyle}`}>
                <Picture alt={member.name} size={1000} src={`/news/${member.img}`} />
              </div>
            </Link>
            <p className="nameAnchor">
              {member.name} - {member.role}
            </p>
          </div>
        ))}
      </div>

      <h2 id="get-in-touch" className="text-center">
        Get In Touch
      </h2>
      <hr />

      <div className="row">
        {socialIcons.map(({ link, name }) => (
          <Link
            href={link}
            key={link}
            className={`col-6 col-sm-6 col-md-4 ${styles.iconBox}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <>
              <Icon icon={name} styling={styles.socialIcon} />
              {name.toUpperCase()}
            </>
          </Link>
        ))}
      </div>
    </div>
  );
}
