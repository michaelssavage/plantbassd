import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Post({ post }) {
	return (
		<div>
			<img width="300" src={post.frontmatter.pic} alt="artist picture" />

			<h1>{post.frontmatter.title}</h1>
			<h4>{post.frontmatter.date}</h4>
			<Link href={`takeover/${post.slug}`}>
				<a className="btn">
					<Button>Read More</Button>
				</a>
			</Link>
		</div>
	);
}
