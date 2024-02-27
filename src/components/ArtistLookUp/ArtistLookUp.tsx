import { useState } from "react";
import { guestList, headliners } from "arrays/previous-guests";
import { defaultGuest, GuestSlug, PreviousGuestType } from "components/PreviousGuest/types";
import { PreviousGuest } from "components/PreviousGuest";
import { ArtistModal } from "./ArtistModal";

interface LookUpProps {
  anames: string[];
  gigs: GuestSlug[];
  current: string;
}

const djs = guestList.concat(headliners);

export const ArtistLookUp = ({ anames, gigs, current }: LookUpProps) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState<PreviousGuestType>(defaultGuest);

  return (
    <>
      <div className="row mb-5 g-4">
        {anames.map((name) => {
          const dj = djs.find((dj) => name.toLowerCase() === dj.name.toLowerCase());

          if (!dj) return <></>;

          return (
            <PreviousGuest
              key={dj.name}
              artist={dj}
              setModalData={setModalData}
              setShow={setShow}
            />
          );
        })}
      </div>
      <ArtistModal data={modalData} show={show} setShow={setShow} gigs={gigs} current={current} />
    </>
  );
};
