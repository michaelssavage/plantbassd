import { guestList } from "arrays/previousGuests";
import CardExternal from "@/cards/CardExternal";
import Head from "next/head";
import styles from "@/pageStyle/guests.module.scss";

export default function PreviousGuestsPage() {
  return (
    <>
      <Head>
        <title>Previous Plant Bass'd Guests</title>
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.header}>Previous Plant Bass'd Guests</h1>

        <div className={`${styles.guestPics} container`}>
          <div className="row g-2">
            {guestList.map((guest) => (
              <CardExternal guest={guest} key={guest.name} />
            ))}
          </div>
        </div>

        <div className={styles.guestNames}>
          <h1>
            {guestList.map((guest, idx, arr) => (
              <span className={`${styles.nameSizing}`} key={guest.name}>
                <a className="blackAnchor" href={guest.link}>
                  {guest.name}
                </a>
                {idx + 1 === arr.length ? "" : " // "}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
