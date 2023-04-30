import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import PageTitle from "components/PageTitle";

export default function TakeoverSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, path, postLink } = frontmatter;
  return (
    <div className={styles.newsSection}>
      <PageTitle title={title} />
      <div className="row">
        {Slug({ path, date, title, mdxSource })}

        <CardWithButtons
          artist="Artist's Insta"
          insta="Instagram"
          link={postLink}
          page={artistPage}
          pic={pic}
          title={title}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("takeovers");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("takeovers", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
}
