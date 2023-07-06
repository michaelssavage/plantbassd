import { IconType } from "components/Icon/types";

export interface SidebarProps {
  link: string;
  name: IconType;
  title: string;
}

export const sidebarList: SidebarProps[] = [
  {
    link: "/",
    name: "home",
    title: "Home",
  },
  {
    link: "/news",
    name: "news",
    title: "News",
  },
  {
    link: "/gigs",
    name: "gigs",
    title: "Gigs",
  },
  {
    link: "/fresh-juice",
    name: "fresh juice",
    title: "Fresh Juice",
  },
  {
    link: "/premieres",
    name: "premieres",
    title: "Premieres",
  },
  {
    link: "/team",
    name: "contact us",
    title: "Contact Us",
  },
  {
    link: "/links",
    name: "links",
    title: "Links",
  },
  {
    link: "/archive",
    name: "search",
    title: "Search",
  },
];
