import { FreshJuice, Gigs, News, Premiere, Radio, Takeover } from "components/Main";
import { sortByDate } from "utils";
import { Banner } from "components/Banner";
import { AllPostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

interface HomeProps {
  allPosts: AllPostProps[];
  takeovers: AllPostProps[];
  radios: AllPostProps[];
  freshjuice: AllPostProps[];
}

export default function Home({ allPosts, takeovers, radios, freshjuice }: HomeProps) {
  return (
    <main>
      <PageTitle title="Plant Bass'd" />

      <Banner />
      <News news={allPosts} />

      <Premiere />

      <FreshJuice freshjuice={freshjuice} />

      <Gigs />

      <div className="discoveryCards">
        <Takeover takeovers={takeovers} />
        <Radio radios={radios} />
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
];

export async function getStaticProps() {
  const files = {};
  for (const folder of folders) {
    const posts = await getPosts(folder);
    files[folder] = posts.sort(sortByDate).reverse().slice(0, 4);
  }
  //Get all the values and flatten into one array.
  const allPosts = Object.keys(files)
    .map((key) => files[key])
    .flat(1)
    .sort(sortByDate)
    .reverse()
    .slice(0, 4);

  return {
    props: {
      allPosts,
      freshjuice: files["fresh-juice"],
      radios: files["radios"],
      takeovers: files["takeovers"],
    },
  };
}
