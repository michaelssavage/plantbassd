import Head from "next/head";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { FreshJuice, Mixes, News, Premiere, Radio, Takeover } from "components/Main";
import { sortByDate } from "utils";
import Footer from "components/Footer";
import Banner from "components/Banner";
import { AllPostProps } from "types/frontmatter";

interface HomeProps {
  allPosts: AllPostProps[];
  takeovers: AllPostProps[];
  radios: AllPostProps[];
  freshjuice: AllPostProps[];
}

export default function Home({ allPosts, takeovers, radios, freshjuice }: HomeProps) {
  return (
    <main>
      <Head>
        <title>Plant Bass'd</title>
      </Head>

      <Banner />
      <News news={allPosts} />

      <Premiere />

      <FreshJuice freshjuice={freshjuice} />

      <Mixes />

      <div className="discoveryCards">
        <Takeover takeovers={takeovers} />
        <Radio radios={radios} />
      </div>

      <Footer />
    </main>
  );
}

const getPosts = (directory: string) => {
  const files = fs.readdirSync(path.join(directory));

  // Return Slug and frontmatter from posts
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(directory, filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });

  return posts.sort(sortByDate).reverse().slice(0, 4);
};

export async function getStaticProps() {
  const freshjuice = getPosts("posts/fresh-juice");
  const gigs = getPosts("posts/gigs");
  const guides = getPosts("posts/guides");
  const news = getPosts("posts/news");
  const radios = getPosts("posts/radios");
  const premieres = getPosts("posts/premieres");
  const takeovers = getPosts("posts/takeovers");
  const topTen = getPosts("posts/top-ten-releases");
  const allPosts = []
    .concat(freshjuice, gigs, guides, news, radios, premieres, takeovers, topTen)
    .sort(sortByDate)
    .reverse()
    .slice(0, 4);

  return {
    props: {
      allPosts,
      freshjuice,
      radios,
      takeovers,
    },
  };
}
