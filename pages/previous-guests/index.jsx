import guestList from "arrays/previous-guests";
import Head from "next/head";
import { CardExternal } from "components/Card";
import styles from "styles/page.module.scss";

export default function PreviousGuestsPage() {
  return (
    <>
      <Head>
        <title>Previous Guests</title>
      </Head>
      <div className="archiveBG">
        <h1 className={styles.pageHeader}>Previous Guests</h1>

        <div className={`${styles.guestPics} container`}>
          <div className="row g-2">
            {guestList.map((guest) => (
              <CardExternal guest={guest} key={guest.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
