import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { linkList, LinkProps, mainLinks } from "arrays/linktree";
import { socialIcons } from "arrays/social-icons";
import { Icon } from "components/Icon";
import Header from "components/Header";
import styles from "styles/links.module.scss";
import { Signup } from "components/Newsletter/Signup";
import { Picture } from "components/Picture";
import { HoverLink } from "components/HoverLink";

interface RenderLinkProps {
  item: LinkProps;
  children: ReactNode;
}

const RenderLink = ({ item, children }: RenderLinkProps) => {
  const classname = `btn btn-outline-dark ${styles.btnText} ${item.img && styles.btnIfImage}`;

  if (item.link.includes("www.plantbassd.com")) {
    return (
      <Link href={new URL(item.link).pathname} className={classname} role="button">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={item.link}
      className={classname}
      rel="noopener noreferrer"
      role="button"
      target="_blank"
    >
      {children}
    </a>
  );
};

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
                  <Icon icon={item.icon} styling={styles.socialIcon} />
                </Link>
              </div>
            ))}
          </div>

          <hr />

          <h2 className="d-flex justify-content-end">Most Recent</h2>
          {linkList.map((item) => (
            <div className={`row ${styles.buttonStyle}`} key={item.title}>
              <div className={styles.linkTitle}>
                <Icon icon={item.icon} styling={styles.linkIcon} />
                <HoverLink url={`/${item.icon}`} name={item.icon.toUpperCase()} />
              </div>
              <RenderLink item={item}>
                <div className={item.img && styles.imageAndText}>
                  {item.img && (
                    <Picture
                      src={item.img}
                      alt={`pic of ${item.title}`}
                      size={150}
                      style={{ borderRadius: "0.275rem" }}
                    />
                  )}
                  <div>
                    <div className={item.description && "fw-bold"}>{item.title}</div>
                    {item.description && <div>{item.description}</div>}
                  </div>
                </div>
              </RenderLink>
            </div>
          ))}

          <h2 className="d-flex justify-content-end">Discovery</h2>
          {mainLinks.map((item) => (
            <div className={`row ${styles.buttonStyle}`} key={item.title}>
              <div className={styles.linkTitle}>
                <Icon icon={item.icon} styling={styles.linkIcon} />
                <div>{item.icon.toUpperCase()}</div>
              </div>
              <RenderLink item={item}>{item.title}</RenderLink>
            </div>
          ))}
          <div className="row my-4">
            <Signup linktree />
          </div>
        </div>
      </div>
    </>
  );
}
