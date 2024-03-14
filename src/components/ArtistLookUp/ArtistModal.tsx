import Link from "next/link";
import { Modal } from "components/Modal";
import { PreviousGuestType } from "components/PreviousGuest/types";
import { Picture } from "components/Picture";
import { PostProps } from "types/frontmatter";
import styles from "./ArtistLookUp.module.scss";

interface ArtistModalProps {
  data: PreviousGuestType;
  show: boolean;
  setShow: (show: boolean) => void;
  gigs: PostProps[];
  current?: string;
}

export const ArtistModal = ({ data, show, setShow, gigs, current }: ArtistModalProps) => {
  const previousGigs = data.gig.filter((gig) => gig !== current);

  const getArtistGigs = (url: string) => {
    const gig = gigs.find(({ frontmatter }) => frontmatter.tickets === url);

    if (gig && "frontmatter" in gig && "slug" in gig) {
      const { frontmatter, slug } = gig;
      return (
        <Link href={`/gigs/${slug}`} onClick={() => setShow(false)} className={styles.gigPreview}>
          <Picture alt={frontmatter.title} src={frontmatter.pic} size={100} />
          <p>{frontmatter.title}</p>
        </Link>
      );
    }
  };

  return (
    <Modal
      title={data.name}
      instaLink={`https://instagram.com/${data.link}`}
      isOpen={show}
      setIsOpen={setShow}
    >
      {previousGigs.length === 0 ? (
        <p>No Previous Plant Bass'd Events</p>
      ) : (
        <>
          <p className={styles.eventTitle}>Previous Plant Bass'd Events:</p>
          <ul className={styles.gigArray}>
            {previousGigs.map((gig) => {
              return <li key={gig}>{getArtistGigs(gig)}</li>;
            })}
          </ul>
        </>
      )}
    </Modal>
  );
};
