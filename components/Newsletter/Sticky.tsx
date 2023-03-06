import { useContext } from "react";
import { NewsletterContext } from "context/newsletter.context";
import styles from "./Newsletter.module.scss";

export const Sticky = () => {
  const { showSticky, showNewsletter, setShowSticky, setShowNewsletter } =
    useContext(NewsletterContext);

  const handleOpenNewsletter = () => {
    setShowSticky(!showSticky);
    setShowNewsletter(!showNewsletter);
  };

  return (
    <div className={styles.sticky} onClick={() => handleOpenNewsletter()}>
      <span className={styles.text}>Sign up to our newsletter?</span>
    </div>
  );
};
