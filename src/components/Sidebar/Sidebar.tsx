import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarList, SidebarProps } from "arrays/sidebar-icons";
import { useClickOutside } from "hooks";
import { MenuIcon } from "components/Icon/Icons/Menu";
import { CloseIcon } from "components/Icon/Icons/Close";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { closeSidebar, navMenu, showSidebar, sidebar } = useClickOutside();
  const router = useRouter();

  return (
    <div ref={navMenu}>
      <header
        className={`${styles.header} ${sidebar ? styles.extendHeader : ""}`}
        onClick={showSidebar}
      >
        <div className={styles.headerToggle}>{sidebar ? <CloseIcon /> : <MenuIcon />}</div>
      </header>

      <nav className={`${styles.navbar} ${sidebar ? styles.extendNavbar : ""}`}>
        <div className={styles.navMenu}>
          {sidebarList.map(({ link, icon, title }: SidebarProps) => {
            const className = `${styles.navLink} ${router.pathname === link ? styles.active : ""}`;
            return (
              <Link key={title} href={link} className="anchor">
                <div tabIndex={0} className={className} onClick={closeSidebar}>
                  <span className={styles.navBarIcons}>{icon}</span>
                  <p className={styles.navName}>{title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
