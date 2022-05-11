import { sortByDate } from "components/Utilities";
import Footer from "components/Footer";
import FreshJuice from "components/FreshJuice";
import Head from "next/head";
import Mixes from "components/Mixes";
import News from "components/News";
import PropTypes from "prop-types";
import Radio from "components/Radio";
import RellaxImg from "components/RellaxImg";
import Takeover from "components/Takeover";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Home({ allPosts, takeovers, radios, freshjuice }) {
  return (
    <>
      <Head>
        <title>Plant Bass'd</title>
      </Head>
      <RellaxImg img="/various/bg.jpg" main />

      <News news={allPosts} />

      <Mixes />

      <FreshJuice freshjuice={freshjuice} />

      <section className="discoveryCards">
        <Takeover takeovers={takeovers} />
        <Radio radios={radios} />
      </section>

      <Footer />
    </>
  );
}

const getPosts = (directory) => {
  const files = fs.readdirSync(path.join(directory));

  // Return Slug and frontmatter from takeover posts
  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
        path.join(directory, filename),
        "utf-8"
      ),
      { data: frontmatter } = matter(markdownWithMeta),
      slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });
};

// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
  // Get files from the takeover directory
  const freshjuice = getPosts("posts/fresh-juice")
      .sort(sortByDate)
      .reverse()
      .slice(0, 4),
    // Get files from the news directory
    news = getPosts("posts/news"),
    // Get files from the radio directory
    radios = getPosts("posts/radios").sort(sortByDate).reverse().slice(0, 4),
    // Get files from the takeover directory
    takeovers = getPosts("posts/takeovers")
      .sort(sortByDate)
      .reverse()
      .slice(0, 4),
    allPosts = [] // eslint-disable-line sort-vars
      .concat(freshjuice, news, radios, takeovers)
      .sort(sortByDate)
      .reverse()
      .slice(0, 5);

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
