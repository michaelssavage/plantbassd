import { guestList, headliners } from "arrays/previous-guests";
import { CardOverlay } from "components/Card";
import Error from "components/Error";
import PageTitle from "components/PageTitle";
import { SearchBox } from "components/SearchBox";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import styles from "styles/previous-guests.module.scss";
import { sortAlphabetically } from "utils";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage() {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } = useSearchFilter(
    djs,
    "array"
  );
  if (searchHasErrored) return <Error error={searchError} />;

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
