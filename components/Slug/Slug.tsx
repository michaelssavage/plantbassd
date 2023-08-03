import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import styles from "styles/slug.module.scss";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { BandCamp, SoundCloud } from "components/MusicPlayers";
import { ImageAndDescription } from "./ImageAndDescription";
import { TextAndMedia } from "./TextAndMedia";

interface SlugProps {
  path: string;
  date: string;
  title: string;
  mdxSource: MDXRemoteSerializeResult;
  children?: ReactNode;
}

const components = { HoverLink, TextAndMedia, Picture, SoundCloud, BandCamp, ImageAndDescription };

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
      <p className="mb-1">
        {<HoverLink url="/" name="home" />} / {<HoverLink url={`/${path}`} name={path} />} /
      </p>
      <p>Posted on {date}</p>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={components} lazy />
      {children}
    </div>
  );
};
