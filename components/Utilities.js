export const sortByDate = (a, b) =>
  new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
