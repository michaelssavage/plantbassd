interface DateProp {
  frontmatter: {
    date: string;
  };
  slug: string;
}

interface GuestProp {
  img: string;
  link: string;
  name: string;
}

export const sortByDate = (a: DateProp, b: DateProp) => {
  return new Date(a.frontmatter?.date).valueOf() - new Date(b.frontmatter?.date).valueOf();
};

export const sortAlphabetically = (a: GuestProp, b: GuestProp) => {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  return aName < bName ? -1 : aName > bName ? 1 : 0;
};
