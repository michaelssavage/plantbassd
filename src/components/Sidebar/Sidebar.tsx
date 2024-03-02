import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarList, SidebarProps } from "arrays/sidebar-icons";
import { Icon } from "components/Icon";
import { useClickOutside } from "hooks";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { closeSidebar, navMenu, showSidebar, sidebar } = useClickOutside();
  const router = useRouter();

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
            {sidebarList.map(({ link, name, title }: SidebarProps) => {
              const className =
                router.pathname === `${link}` ? `${styles.activeLink}` : `${styles.navLink}`;
              return (
                <Link key={title} href={link} className="anchor">
                  <div tabIndex={0} className={className} onClick={closeSidebar}>
                    <Icon icon={name} size="2rem" styling={styles.navBarIcons} />
                    <span className={styles.navName}>{title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
