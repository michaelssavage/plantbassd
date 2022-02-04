import { RiSoundcloudLine } from "react-icons/ri";
import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import PropTypes from "prop-types";

export default function CardExternal({ card }) {
	return (
		<div className="col-6 col-md-6 col-lg-6 col-xl-3">
			<div className="imgContainer">
				<a href={card.link} rel="noopener noreferrer" target="_blank">
					<Image
						alt={card.pic}
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(400, 400)
						)}`}
						// eslint-disable-next-line react/forbid-component-props
						className="card-img-top"
						height={500}
						placeholder="blur"
						src={card.pic}
						width={500}
					/>
					<div className="soundcloudOverlay">
						<div className="imgTextOverlay">
							<RiSoundcloudLine /> Listen Now
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}

CardExternal.propTypes = {
	card: PropTypes.shape({
		key: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		pic: PropTypes.string.isRequired,
	}).isRequired,
};
