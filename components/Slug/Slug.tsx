import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import styles from "styles/slug.module.scss";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { SoundCloud } from "components/SoundCloud";

interface SlugProps {
  path: string;
  date: string;
  title: string;
  mdxSource: MDXRemoteSerializeResult;
  children?: ReactNode;
}

const components = { HoverLink, Picture, SoundCloud };

export const Slug = (props: SlugProps) => {
  const { path, date, title, mdxSource, children } = props;
  return (
    <div
      className={`
				${styles.postContent}
				col-lg-8
				col-md-12
				col-xl-8 
				`}
    >
      <p>
        {<HoverLink url="/" name="home" inline />} /{" "}
        {<HoverLink url={`/${path}`} name={path} inline />} /
      </p>
      <p className={styles.postDate}>Posted on {date}</p>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postBody}>
        <MDXRemote {...mdxSource} components={components} />
        {children}
      </div>
    </div>
  );
};
