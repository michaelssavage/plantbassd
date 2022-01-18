import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import { RiSoundcloudLine } from "react-icons/ri";

export default function CardExternal({ card }) {
	return (
		<div className="col-6 col-md-6 col-lg-6 col-xl-3">
			<div className="imgContainer">
				<a href={card.link} rel="noopener noreferrer" target="_blank">
					<Image
						alt={card.pic}
						className="card-img-top" // eslint-disable-line react/forbid-component-props
						height={500}
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
