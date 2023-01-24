import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { guestList, headliners } from "arrays/previous-guests";
import styles from "styles/slug.module.scss";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { ArtistLookUp } from "./ArtistLookUp";

const djs = guestList.concat(headliners);
const len = djs.length;
const components = { HoverLink, Picture };

export const Gigs = (
  anames: string[],
  mdxSource: MDXRemoteSerializeResult,
  date: string,
  title: string
) => {
  return (
    <div
      className={`
				${styles.postContent}
				col-lg-6
				col-md-12
				col-xl-6 
				`}
    >
      <p className={styles.postDate}>Posted on {date}</p>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postBody}>
        <MDXRemote {...mdxSource} components={components} />
        <div className="container">
          <div className="row">{anames.map((name) => ArtistLookUp(name, len, djs))}</div>
        </div>
      </div>
    </div>
  );
};
