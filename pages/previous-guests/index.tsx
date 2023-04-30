import { guestList, headliners } from "arrays/previous-guests";
import { CardOverlay } from "components/Card";
import Error from "components/Error";
import PageTitle from "components/PageTitle";
import { SearchBox } from "components/SearchBox";
import { useFilter } from "hooks/useFilter.hook";
import styles from "styles/previous-guests.module.scss";
import { sortAlphabetically } from "utils";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage() {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(djs, "array");
  if (hasErrored) return <Error error={error} />;

  return (
    <div className="guestsBG">
      <PageTitle title="Previous Guests" />
      <h1 className={styles.pageHeader}>Previous Guests (A-Z)</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
        style={`input-group ${styles.filter}`}
        text="DJs"
      />

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
  );
}
