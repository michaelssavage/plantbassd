import Link from "next/link";
import PropTypes from "prop-types";

export default function DiscoverMoreBtn({ title = "Discover More", link }) {
	return (
		<div className="globalBottomBtn">
			<Link href={link}>
				<a
					className="text-nowrap btn btn-outline-dark btn-lg"
					role="button"
				>
					{title}
				</a>
			</Link>
		</div>
	);
}

DiscoverMoreBtn.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string,
};
