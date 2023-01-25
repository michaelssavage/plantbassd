export interface AllPostProps {
  slug: string;
  frontmatter: IGigs | IFreshJuice | INews | ITakeover | IRadio | ITopTen | IPremiere;
}

interface Frontmatter {
  title: string;
  name: string;
  date: string;
  pic: string;
  path: string;
  bio: string;
  postLink: string;
}

interface IGigs extends Frontmatter {
  tags: string;
  city: string;
  anames: string[];
  tickets: string;
}

interface IFreshJuice extends Frontmatter {
  tags: string;
  bandcamp: string;
  artist?: string;
}

interface INews extends Frontmatter {
  tags: string;
  tickets?: string;
  seeMore?: string;
}

interface IPremiere extends Frontmatter {
  listen: string;
}

interface ITakeover extends Frontmatter {
  artistPage: string;
}

interface IRadio extends Omit<Frontmatter, "postLink"> {
  tracklist: string;
  artistPage: string;
  mixLink: string;
}

interface ITopTen extends Omit<Frontmatter, "postLink"> {
  tags: string;
  cover: string;
  header: string;
  insta: string;
}

export interface CardProps {
  frontmatter: {
    title: string;
    pic: string;
    date?: string;
    bio?: string;
  };
}

export interface FilterProps {
  frontmatter: {
    tags: string;
    city: string;
  };
}

export interface StaticProps {
  params: {
    slug: string;
  };
}

export interface TagProps {
  name: string;
  value: boolean;
}
