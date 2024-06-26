import { FreshJuice, Gigs, News, Premiere, Radar, TopTen } from "components/Main";
import { Banner } from "components/Banner";
import { PostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";

interface HomeProps {
  allPosts: PostProps[];
  topTen: PostProps[];
  radar: PostProps[];
  freshjuice: PostProps[];
  gigs: PostProps[];
}

export default function Home({ allPosts, topTen, radar, freshjuice, gigs }: HomeProps) {
  return (
    <main>
      <PageMetaData title="Plant Bass'd" />

      <Banner />

      <News news={allPosts} />

      <Premiere />

      <FreshJuice freshjuice={freshjuice} />

      <Gigs gigs={gigs} />

      <div className="gradients">
        <TopTen topTen={topTen} />
        <Radar radar={radar} />
      </div>
    </main>
  );
}

const folders = [
  "fresh-juice",
  "gigs",
  "guides",
  "news",
  "radios",
  "premieres",
  "takeovers",
  "top-ten-releases",
  "under-the-radar",
  "gallery",
];

export async function getStaticProps() {
  const files: { [key: string]: PostProps[] } = {};
  for (const folder of folders) {
    const posts = await getPosts(folder);
    files[folder] = posts.sort(sortByMostRecentDate).slice(0, 4);
  }
  //Get all the values and flatten into one array.
  const allPosts = Object.keys(files)
    .map((key) => files[key])
    .flat(1)
    .sort(sortByMostRecentDate)
    .slice(0, 4);

  return {
    props: {
      allPosts,
      freshjuice: files["fresh-juice"],
      radar: files["under-the-radar"].splice(0, 2),
      topTen: files["top-ten-releases"].splice(0, 2),
      gigs: files["gigs"],
    },
  };
}
