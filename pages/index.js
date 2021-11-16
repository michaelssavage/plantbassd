import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.js";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Mixes from "../components/Mixes/Mixes.js";
import Takeover from "../components/Takeover/Takeover.js";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post.js";

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd DJs blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Navbar />

			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/images/hoodie.jpg",
							amount: 0.4,
						},
					]}
					style={{ height: "100vh" }}
				></ParallaxBanner>
			</ParallaxProvider>

			<Mixes />

			<Takeover posts={posts} />

			{/* <div>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div> */}
		</>
	);
}

export async function getStaticProps() {
	// get files from the takeover directory
	const files = fs.readdirSync(path.join("posts"));

	//get Slug and frontmatter from posts
	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
}
