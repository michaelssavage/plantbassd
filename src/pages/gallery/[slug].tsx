import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Slug } from "components/Slug";
import { SlugProp, StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import PageMetaData from "components/PageMetaData";
import { Picture } from "components/Picture";
import { Shell } from "components/Slug/Shell";

export default function GallerySlug({ mdxSource, slug, frontmatter }: SlugProp) {
  const { title, date, path, gallery, gallerySize, pic, bio } = frontmatter;

  return (
    <Shell>
      <PageMetaData
        title={title}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className="row">
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
      </div>
    </Shell>
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
      slug,
    },
  };
}
