import { InferGetStaticPropsType } from "next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import PageTitle from "components/PageTitle";
import { Picture } from "components/Picture";

export default function NewsSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, path, gallery, gallerySize } = frontmatter;

  return (
    <div className={styles.slugContainer}>
      <PageTitle title={title} />
      <div className="row">
        {
          <Slug path={path} date={date} title={title} mdxSource={mdxSource} fullWidth>
            <div style={{ margin: "2rem 0" }}>
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="2px">
                  {[...Array(gallerySize).keys()].map((image) => (
                    <Picture
                      key={image}
                      src={`/${gallery}/${image}.JPG`}
                      alt={`image ${image}`}
                      size={400}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </Slug>
        }
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = await getSlugPath("gallery");

  return {
    fallback: false,
    paths,
  };
}
export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("gallery", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
}