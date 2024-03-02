interface DateProp {
  frontmatter: {
    date: string;
  };
  slug: string;
}

export const sortByMostRecentDate = (a: DateProp, b: DateProp) => {
  return new Date(b.frontmatter?.date).valueOf() - new Date(a.frontmatter?.date).valueOf();
};
