export interface FreshJuiceProps {
  slug?: string;
  frontmatter: {
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
  };
}

export interface GigProps {
  slug?: string;
  frontmatter: {
    title: string;
    name: string;
    date: string;
    pic: string;
    tags: string;
    path: string;
    postLink: string;
    bio: string;
    city: string;
    anames: string;
    alinks: string;
    apics: string;
    tickets?: string;
  };
}

export interface NewsProps {
  slug?: string;
  frontmatter: {
    title: string;
    name: string;
    date: string;
    tags: string;
    pic: string;
    postLink: string;
    tickets?: string;
    seeMore?: string;
    bio: string;
    path: string;
  };
}

export interface RadioProps {
  slug?: string;
  frontmatter: {
    title: string;
    name: string;
    date: string;
    pic: string;
    tracklist: string;
    artistPage: string;
    mixLink: string;
    bio: string;
    path: string;
  };
}

export interface TakeoverProps {
  slug?: string;
  frontmatter: {
    title: string;
    name: string;
    date: string;
    pic: string;
    artistPage: string;
    postLink: string;
    bio: string;
    path: string;
  };
}

export interface TopTenProps {
  slug?: string;
  frontmatter: {
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
  };
}

export interface StaticProps {
  params: {
    slug: string;
  };
}
