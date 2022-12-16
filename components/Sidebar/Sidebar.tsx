import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarList } from "arrays/sidebar-icons";
import SocialIcon from "components/SocialIcon";
import useClickLocation from "hooks/useClickLocation";
import styles from "./Sidebar.module.scss";

interface ListingProps {
  link: string;
  onClick: () => void;
  title: string;
}

function Listing({ link, onClick, title }: ListingProps) {
  const router = useRouter();
  const className = router.pathname === `${link}` ? `${styles.activeLink}` : `${styles.navLink}`;
  return (
    <Link href={link} className="anchor">
      <div className={className} onClick={onClick}>
        <SocialIcon icon={title} styling={styles.navIcon} />
        <span className={styles.navName}>{title}</span>
      </div>
    </Link>
  );
}

export default function Sidebar() {
  const { closeSidebar, navMenu, showSidebar, sidebar } = useClickLocation();

  return (
    <div ref={navMenu}>
      <header className={sidebar ? styles.extendHeader : styles.header} onClick={showSidebar}>
        <div className={styles.headerToggle}>
          {sidebar ? <AiOutlineClose className={styles.cancelToggle} /> : <FaBars />}
        </div>
      </header>

      <div className={sidebar ? styles.extendNav : styles.navContainer}>
        <nav className={styles.navMenu}>
          <div className={styles.navList}>
            {sidebarList.map((item) => (
              <Listing
                key={item.title}
                link={item.link}
                onClick={closeSidebar}
                title={item.title}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
