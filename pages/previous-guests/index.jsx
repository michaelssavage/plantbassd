import guestList from "arrays/previous-guests";
import Head from "next/head";
import { CardExternal } from "components/Card";
import Footer from "components/Footer";
import styles from "./Previous.module.scss";

export default function PreviousGuestsPage() {
  return (
    <>
      <Head>
        <title>Previous Guests</title>
      </Head>
      <div className={styles.guestsBG}>
        <h1 className={styles.pageHeader}>Previous Guests</h1>

        <div className={`${styles.guestPics} container`}>
          <div className="row g-1">
            {guestList.map((guest) => (
              <CardExternal guest={guest} key={guest.name} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
