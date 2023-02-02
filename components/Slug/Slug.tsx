import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "styles/slug.module.scss";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { SoundCloud } from "components/SoundCloud";

const components = { HoverLink, Picture, SoundCloud };

export const Slug = (date: string, title: string, mdxSource: MDXRemoteSerializeResult) => {
  return (
    <div
      className={`
				${styles.postContent}
				col-lg-8
				col-md-12
				col-xl-8 
				`}
    >
      <p className={styles.postDate}>Posted on {date}</p>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postBody}>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
};
