interface GuestProp {
  img: string;
  link: string;
  name: string;
}

export const sortAlphabetically = (a: GuestProp, b: GuestProp) => {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  return aName < bName ? -1 : aName > bName ? 1 : 0;
};
