import { useState } from "react";
import { GetStaticProps } from "next";
import { guestList, GuestProps, headliners } from "arrays/previous-guests";
import Error from "components/Error";
import PageMetaData from "components/PageMetaData";
import { PreviousGuest } from "components/PreviousGuest";
import { SearchBox } from "components/SearchBox";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import styles from "components/PreviousGuest/PreviousGuest.module.scss";
import { defaultGuest, PreviousGuestType } from "components/PreviousGuest/types";
import { getPosts } from "utils/getPosts";
import { sortAlphabetically } from "utils";
import { ArtistModal } from "components/ArtistLookUp/ArtistModal";
import { PostProps } from "types/frontmatter";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage({ gigs }: { gigs: PostProps[] }) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState<PreviousGuestType>(defaultGuest);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter<GuestProps>(djs, "array");

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="guestsBG">
      <PageMetaData title="Previous Guests" />
      <h1 className={styles.pageHeader}>Previous Guests (A-Z)</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
        text="DJ"
      />
      {filter ? (
        <div className="row g-4">
          {postCards.sort(sortAlphabetically).map((guest) => (
            <PreviousGuest
              key={guest.name}
              artist={guest}
              setModalData={setModalData}
              setShow={setShow}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="row g-4">
            {headliners.sort(sortAlphabetically).map((guest: PreviousGuestType) => (
              <PreviousGuest
                key={guest.name}
                artist={guest}
                setModalData={setModalData}
                setShow={setShow}
              />
            ))}
          </div>
          <hr />
          <div className="row g-4">
            {guestList.sort(sortAlphabetically).map((guest: PreviousGuestType) => (
              <PreviousGuest
                key={guest.name}
                artist={guest}
                setModalData={setModalData}
                setShow={setShow}
              />
            ))}
          </div>
        </>
      )}
      <ArtistModal data={modalData} show={show} setShow={setShow} gigs={gigs} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gigs = await getPosts("gigs");

  return {
    props: {
      gigs,
    },
  };
};
