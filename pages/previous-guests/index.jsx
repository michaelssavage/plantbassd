import { guestList } from "arrays/previousGuests";
import CardExternal from "@/cards/CardExternal";
import Head from "next/head";
import styles from "@/pageStyle/guests.module.scss";

export default function PreviousGuestsPage() {
  return (
    <>
      <Head>
        <title>Previous Guests</title>
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.header}>Previous Guests</h1>

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
