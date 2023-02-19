import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import { IconContext } from "react-icons";
import styles from "./Sticky.module.scss";
import { Newsletter } from "../Newsletter";

export const Sticky = () => {
  const [hidden, setHidden] = useState(false);
  const [show, setShow] = useState(false);

  const removeSticky = () => {
    setHidden(true);
  };

  const showNewsletter = () => {
    setShow(true);
  };

  const changeSize = () => {
    if (hidden) return styles.remove;
    if (show) return styles.newsletter;
    return styles.sticky;
  };

  return (
    <div className={changeSize()}>
      {show ? (
        <Newsletter setHidden={setHidden} />
      ) : (
        <>
          <IconContext.Provider value={{ className: styles.icon }}>
            <RxCrossCircled onClick={removeSticky} />
          </IconContext.Provider>
          <span className={styles.text} onClick={showNewsletter}>
            Want to know when we post?
          </span>
        </>
      )}
    </div>
  );
};
