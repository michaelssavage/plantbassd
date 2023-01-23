export interface AllPostProps {
  slug?: string;
  frontmatter: IGigs | IFreshJuice | INews | IRadio | ITakeover | ITopTen;
}

export interface IGigs {
  title: string;
  name: string;
  date: string;
  pic: string;
  tags: string;
  path: string;
  postLink: string;
  bio: string;
  city: string;
  anames: string[];
  alinks: string[];
  apics: string[];
  tickets?: string;
}

export interface IFreshJuice {
  title: string;
  name: string;
  date: string;
  tags: string;
  pic: string;
  postLink: string;
  artist?: string;
  bandcamp?: string;
  bio: string;
  path: string;
}

export interface INews {
  title: string;
  name: string;
  date: string;
  pic: string;
  tags?: string;
  postLink: string;
  tickets?: string;
  seeMore?: string;
  bio: string;
  path: string;
}

export interface IRadio {
  title: string;
  name: string;
  date: string;
  pic: string;
  tracklist: string;
  artistPage: string;
  mixLink: string;
  bio: string;
  path: string;
}

export interface ITakeover {
  title: string;
  name: string;
  date: string;
  pic: string;
  artistPage: string;
  postLink: string;
  bio: string;
  path: string;
}

export interface ITopTen {
  title: string;
  name: string;
  date: string;
  tags: string;
  pic: string;
  cover: string;
  bio: string;
  path: string;
  header: string;
  insta: string;
  intro: string;
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
