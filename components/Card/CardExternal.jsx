import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const CardExternal = ({ guest }) => {
  return (
    <div className="col-4 col-md-4 col-lg-3 col-xl-2">
      <Link href={guest.link}>
        <a className="blackAnchor">
          <div className={`card imgContainer ${styles.cardStyle}`}>
            <Image
              alt={guest.name}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
              height={200}
              placeholder="blur"
              src={`/news/${guest.img}`}
              width={200}
            />
            <div className="guestOverlay">
              <div className="guestTextOverlay">{guest.name}</div>
            </div>
          </div>
          <p className="nameAnchor">{guest.name}</p>
        </a>
      </Link>
    </div>
  );
};

CardExternal.propTypes = {
  guest: PropTypes.shape({
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
