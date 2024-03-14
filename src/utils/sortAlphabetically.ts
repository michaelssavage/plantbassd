interface SortProp {
  name: string;
}

export const sortAlphabetically = (a: SortProp, b: SortProp) => {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  return aName < bName ? -1 : aName > bName ? 1 : 0;
};
