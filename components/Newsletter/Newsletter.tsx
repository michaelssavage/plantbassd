import { useContext } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NewsletterContext } from "context/newsletter.context";
import styles from "./Newsletter.module.scss";
import { Signup } from "./Signup";
import { Sticky } from "./Sticky";

export const Newsletter = () => {
  const { showNewsletter, showSticky, setShowSticky } = useContext(NewsletterContext);

  const handleOpenSticky = () => {
    setShowSticky(!showSticky);
  };

  const showButton = () => {
    if (showNewsletter) return null;
    if (showSticky) return <AiOutlineCloseCircle />;
    else return <BiLeftArrowCircle />;
  };

  return (
    <>
      <div
        className={showSticky ? styles.showSticky : styles.icon}
        onClick={handleOpenSticky}
        role="button"
      >
        {showButton()}
      </div>
      <div className={styles.floating}>
        {showSticky && <Sticky />}
        {showNewsletter && <Signup />}
      </div>
    </>
  );
};
