import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import news from "styles/slug.module.scss";

export default function CardWithButtons({
	pic,
	title,
	artist,
	page,
	insta,
	link,
}) {
	return (
		<div className="col">
			<div className={news.newsImage}>
				<Image
					alt={title}
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(400, 400)
					)}`}
					height={500}
					layout="responsive"
					placeholder="blur"
					src={pic}
					width={500}
				/>
				<div className={`row ${news.buttons}`}>
					<div className={`col ${news.button}`}>
						<Link href={page}>
							<a
								className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
								role="button"
							>
								{artist}
							</a>
						</Link>
					</div>
					<div className={`col ${news.button}`}>
						<Link href={page}>
							<a
								className={`${news.hoverLink} text-nowrap btn btn-outline-dark btn-lg`}
								href={link}
								role="button"
							>
								{insta}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CardWithButtons.propTypes = {
	artist: PropTypes.string.isRequired,
	insta: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	page: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
