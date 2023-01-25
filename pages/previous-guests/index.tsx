import Head from "next/head";
import { guestList, headliners } from "arrays/previous-guests";
import { CardOverlay } from "components/Card";
import Error from "components/Error";
import { SearchBox } from "components/SearchBox";
import { useFilter } from "hooks/useFilter.hook";
import styles from "styles/previous-guests.module.scss";
import { sortAlphabetically } from "utils";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage() {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(djs, "array");
  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Previous Guests</title>
      </Head>
      <div className="guestsBG">
        <h1 className={styles.pageHeader}>Previous Guests (A-Z)</h1>

        <div className="container">
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            amount={postCards.length}
            style={`input-group ${styles.filter}`}
            text="DJs"
          />
        </div>
        {filter ? (
          CardOverlay(postCards.sort(sortAlphabetically))
        ) : (
          <>
            {CardOverlay(headliners.sort(sortAlphabetically))}
            <hr />
            {CardOverlay(guestList.sort(sortAlphabetically))}
          </>
        )}
      </div>
    </>
  );
}
