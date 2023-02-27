import { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import styles from "./Newsletter.module.scss";
import { Signup } from "./Signup";
import { Sticky } from "./Sticky";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const handleButtonClick = () => {
    setShowSticky(!showSticky);
  };

  const handleStickyClick = () => {
    setShowSticky(!showSticky);
    setShowNewsletter(!showNewsletter);
  };

  const showButton = () => {
    if (showNewsletter) return null;
    if (showSticky) return <BiRightArrowCircle />;
    else return <BiLeftArrowCircle />;
  };

  return (
    <>
      <div
        className={showSticky ? styles.showSticky : styles.icon}
        onClick={handleButtonClick}
        role="button"
      >
        {showButton()}
      </div>
      <div className={styles.floating}>
        {showSticky && <Sticky handleStickyClick={handleStickyClick} />}
        {showNewsletter && (
          <Signup
            setEmail={setEmail}
            setName={setName}
            setComplete={setComplete}
            setShowNewsletter={setShowNewsletter}
            name={name}
            email={email}
            complete={complete}
          />
        )}
      </div>
    </>
  );
};
