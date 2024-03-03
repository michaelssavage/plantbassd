import { ReactElement } from "react";
import {
  BookIcon,
  HomeIcon,
  LemonIcon,
  LinkIcon,
  NewsIcon,
  RadarIcon,
  SpeakerIcon,
  TicketIcon,
} from "components/Icon";

export interface SidebarProps {
  link: string;
  icon: ReactElement;
  title: string;
}

export const sidebarList: SidebarProps[] = [
  {
    link: "/",
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    link: "/links",
    icon: <LinkIcon />,
    title: "Links",
  },
  {
    link: "/news",
    icon: <NewsIcon />,
    title: "News",
  },
  {
    link: "/gigs",
    icon: <TicketIcon />,
    title: "Gigs",
  },
  {
    link: "/under-the-radar",
    icon: <RadarIcon />,
    title: "Radar",
  },
  {
    link: "/fresh-juice",
    icon: <LemonIcon />,
    title: "Fresh Juice",
  },
  {
    link: "/premieres",
    icon: <SpeakerIcon />,
    title: "Premieres",
  },
  {
    link: "/team",
    icon: <BookIcon />,
    title: "Contact Us",
  },
];
