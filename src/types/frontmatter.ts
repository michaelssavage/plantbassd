import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

export interface SlugProp {
  frontmatter: Frontmatter;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
  slug: string;
}

export interface StaticProps {
  params: {
    slug: string;
  };
}

interface Optionals {
  tags: string;
  city: string;
  anames: string[];
  bandcamp: string;
  artist: string;
  tickets: string;
  listen: string;
  artistPage: string;
  seeMore: string;
  mixLink: string;
  cover: string;
  header: string;
  insta: string;
  youtube: string;
  gallery: string;
  gallerySize: number;
  intro: string;
  month: string;
}

export interface Frontmatter extends Partial<Optionals> {
  title: string;
  name: string;
  date: string;
  pic: string;
  path: string;
  bio: string;
  postLink: string;
}

export interface PostProps {
  slug: string;
  frontmatter: Frontmatter;
}

export interface CardProps {
  slug?: string;
  frontmatter: {
    title: string;
    pic: string;
    date?: string;
    bio?: string;
    path?: string;
    name?: string;
  };
}

export interface FilterProps {
  frontmatter: {
    tags: string;
    city: string;
  };
}
