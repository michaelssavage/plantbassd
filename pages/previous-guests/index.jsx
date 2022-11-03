import { guestList } from "arrays/previousGuests";
import Head from "next/head";
import CardExternal from "@/cards/CardExternal";
import styles from "@/pageStyle/page.module.scss";

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
