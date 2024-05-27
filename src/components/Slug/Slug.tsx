import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { BandCamp, SoundCloud, VideoPlayer, YouTube } from "components/Players";
import styles from "./Slug.module.scss";
import { TextAndMedia } from "./Layout/TextAndMedia";
import { ImageAndDescription } from "./Layout/ImageAndDescription";

interface SlugProps {
  path: string;
  date: string;
  title: string;
  mdxSource: MDXRemoteSerializeResult;
  children?: ReactNode;
  fullWidth?: boolean;
}

const components = {
  HoverLink,
  TextAndMedia,
  Picture,
  SoundCloud,
  VideoPlayer,
  YouTube,
  BandCamp,
  ImageAndDescription,
};

export const Slug = (props: SlugProps) => {
  const { path, date, title, mdxSource, children, fullWidth = false } = props;

  const styling = fullWidth
    ? styles.fullWidth
    : `${styles.postContent}  col-md-12 col-lg-8 col-xl-8`;
  return (
    <div className={styling}>
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
