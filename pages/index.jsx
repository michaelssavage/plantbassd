import { sortByDate } from "components/Utilities";
import Footer from "components/Footer";
import FreshJuice from "components/FreshJuice";
import Head from "next/head";
import Mixes from "components/Mixes";
import News from "components/News";
import PropTypes from "prop-types";
import Radio from "components/Radio";
import Banner from "components/Banner";
import Premiere from "components/Premiere";
import Takeover from "components/Takeover";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default function Home({ allPosts, takeovers, radios, freshjuice }) {
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

const getPosts = (directory) => {
  const files = fs.readdirSync(path.join(directory));

  // Return Slug and frontmatter from posts
  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(directory, filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });
};

export async function getStaticProps() {
  const freshjuice = getPosts("posts/fresh-juice").sort(sortByDate).reverse().slice(0, 4);
  const gigs = getPosts("posts/gigs").sort(sortByDate).reverse().slice(0, 4);
  const guides = getPosts("posts/guides").sort(sortByDate).reverse().slice(0, 4);
  const news = getPosts("posts/news").sort(sortByDate).reverse().slice(0, 4);
  const radios = getPosts("posts/radios").sort(sortByDate).reverse().slice(0, 2);
  const premieres = getPosts("posts/premieres").sort(sortByDate).reverse().slice(0, 4);
  const takeovers = getPosts("posts/takeovers").sort(sortByDate).reverse().slice(0, 2);
  const topTen = getPosts("posts/top-ten-releases").sort(sortByDate).reverse().slice(0, 4);
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

Home.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
