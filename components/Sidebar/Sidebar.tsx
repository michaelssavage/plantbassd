import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarList, SidebarProps } from "arrays/sidebar-icons";
import { Icon } from "components/Icon";
import { useClickOutside } from "hooks";
import styles from "./Sidebar.module.scss";

interface ListingProps {
  item: SidebarProps;
  onClick: () => void;
}

function Listing({ item, onClick }: ListingProps) {
  const { link, name, title } = item;
  const router = useRouter();
  const className = router.pathname === `${link}` ? `${styles.activeLink}` : `${styles.navLink}`;
  return (
    <Link href={link} className="anchor">
      <div tabIndex={0} className={className} onClick={onClick}>
        <Icon icon={name} size="2rem" />
        <span className={styles.navName}>{title}</span>
      </div>
    </Link>
  );
}

export default function Sidebar() {
  const { closeSidebar, navMenu, showSidebar, sidebar } = useClickOutside();

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
              <Listing key={item.title} item={item} onClick={closeSidebar} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
