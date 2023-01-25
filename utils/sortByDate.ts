interface DateProp {
  frontmatter: {
    date: string;
  };
  slug: string;
}
export const sortByDate = (a: DateProp, b: DateProp) => {
  return new Date(a.frontmatter?.date).valueOf() - new Date(b.frontmatter?.date).valueOf();
};
