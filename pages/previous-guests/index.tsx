import { useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { guestList, headliners } from "arrays/previous-guests";
import Error from "components/Error";
import PageTitle from "components/PageTitle";
import { PreviousGuest } from "components/PreviousGuest";
import { SearchBox } from "components/SearchBox";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import styles from "components/PreviousGuest/PreviousGuest.module.scss";
import { Modal } from "components/Modal";
import { defaultGuest, GuestSlug, PreviousGuestType } from "components/PreviousGuest/types";
import { getPosts } from "utils/getPosts";
import { Picture } from "components/Picture";

const djs = guestList.concat(headliners);

export default function PreviousGuestsPage({ gigs }: { gigs: GuestSlug[] }) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState<PreviousGuestType>(defaultGuest);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } = useSearchFilter(
    djs,
    "array"
  );

  const getNameOfGig = (url: string) => {
    const gig: GuestSlug = gigs.find((gig: GuestSlug) => gig.frontmatter.tickets === url);

    if (gig && "frontmatter" in gig && "slug" in gig) {
      const { frontmatter, slug } = gig;
      return (
        <Link href={`/gigs/${slug}`} className={styles.gigPreview}>
          <Picture alt={frontmatter.title} src={frontmatter.pic} size={100} />
          <p>{frontmatter.title}</p>
        </Link>
      );
    }
  };

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="guestsBG">
      <PageTitle title="Previous Guests" />
      <h1 className={styles.pageHeader}>Previous Guests (A-Z)</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
        text="DJ"
        showLabel={false}
      />

      {filter ? (
        <PreviousGuest guests={postCards} setModalData={setModalData} setShow={setShow} />
      ) : (
        <>
          <PreviousGuest guests={headliners} setModalData={setModalData} setShow={setShow} />
          <hr />
          <PreviousGuest guests={guestList} setModalData={setModalData} setShow={setShow} />
        </>
      )}
      <Modal
        title={modalData.name}
        instaLink={`https://instagram.com/${modalData.link}`}
        isOpen={show}
        setIsOpen={setShow}
      >
        <p className={styles.eventTitle}>Plant Bass'd Events:</p>
        <ul className={styles.gigArray}>
          {modalData.gig.reverse().map((gig) => {
            return <li key={gig}>{getNameOfGig(gig)}</li>;
          })}
        </ul>
      </Modal>
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
