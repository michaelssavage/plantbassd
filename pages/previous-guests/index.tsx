import Head from "next/head";
import { guestList, headliners } from "arrays/previous-guests";
import { CardOverlay } from "components/Card";

import Error from "components/Error";
import { SearchBox } from "components/SearchBox";
import { useFilter } from "hooks/useFilter.hook";
import styles from "./previous-guests.module.scss";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage() {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(djs, "array");
  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Previous Guests</title>
      </Head>
      <div className={styles.guestsBG}>
        <h1 className={styles.pageHeader}>Previous Guests (A-Z)</h1>

        <SearchBox
          handleSearchChange={handleSearchChange}
          filter={filter}
          amount={postCards.length}
          placeholder="an artist's name"
          style={`input-group ${styles.filter}`}
          text="DJs"
        />

        {filter ? (
          CardOverlay(postCards)
        ) : (
          <>
            {CardOverlay(headliners)}
            <hr />
            {CardOverlay(guestList)}
          </>
        )}
      </div>
    </>
  );
}
