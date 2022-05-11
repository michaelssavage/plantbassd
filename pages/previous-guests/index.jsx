import { guestList } from "arrays/previousGuests";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/pageStyle/guests.module.scss";

export default function PreviousGuestsPage() {
  return (
    <>
      <Head>
        <title>Previous Plant Bass'd Guests</title>
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.header}>Previous Plant Bass'd Guests</h1>

        <div className={styles.guestNames}>
          <h1>
            {guestList.map((guest, idx, arr) => (
              <span key={guest.name}>
                <a className="blackAnchor" href={guest.link}>
                  {guest.name}
                </a>
                {idx + 1 === arr.length ? "" : " // "}
              </span>
            ))}
          </h1>
        </div>

        <div className={`${styles.guestPics} container`}>
          <div className="row g-2">
            {guestList.map((guest) => (
              <div
                className={`
            col-6 
            col-md-6 
            col-lg-3 
            col-xl-3`}
                key={guest.name}
              >
                <Link href={guest.link}>
                  <a>
                    <div className={`card ${styles.cardStyle}`}>
                      <Image
                        alt={guest.name}
                        height={200}
                        src={`/news/${guest.img}`}
                        width={200}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
