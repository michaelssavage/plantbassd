export interface LinkProps {
  title: string;
  link: string;
  icon: string;
  description?: string;
  img?: string;
}

export const linkList: LinkProps[] = [
  {
    title: "SweatBox: DOOM @ Stereo (Sat, 6th May)",
    link: "https://ra.co/events/1685076",
    icon: "tickets",
    description:
      "Plant Bass'd takes the SweatBox series for an exploration through the theme of DOOM..",
    img: "/news/32-de-grandi.jpg",
  },
  {
    title: "'Prism' by Silky Klub",
    link: "https://soundcloud.com/plantbassddjs/premiere-silky-klub-prism",
    icon: "premieres",
    img: "/premieres/43-silky.jpg",
  },
  {
    title: "'Where'd It Go' by HEADSGONE",
    link: "https://www.plantbassd.com/fresh-juice/headsgone-7-4-23",
    icon: "fresh juice",
    img: "/fresh-juice/65-cork.jpg",
  },
  {
    title: "'Preset Resets' by Various Artists (Tobago Tracks)",
    link: "https://www.plantbassd.com/fresh-juice/preset-resets-6-4-23",
    icon: "fresh juice",
    img: "/fresh-juice/64-oliver.png",
  },
  {
    title: "Under the Radar: March",
    link: "https://www.plantbassd.com/under-the-radar/march-23",
    icon: "news",
    img: "/under-the-radar/march/9.png",
  },
  {
    title: "'Rave Auld Times' by Breen",
    link: "https://soundcloud.com/plantbassddjs/premiere-breen-rave-auld-times",
    icon: "premieres",
    img: "/premieres/42-breen.jpg",
  },
  {
    title: "'Backroads' by Oliver Twist",
    link: "https://soundcloud.com/plantbassddjs/premiere-oliver-twist-backroads",
    icon: "premieres",
    img: "/premieres/40-oliver.jpg",
  },
  {
    title: "'Algae' by Dansa",
    link: "https://soundcloud.com/plantbassddjs/premiere-dansa-algae",
    icon: "premieres",
    img: "/premieres/39-dansa.jpg",
  },
  {
    title: "'ALTO' by AKSENT & Prince Prada",
    link: "https://www.plantbassd.com/fresh-juice/aksent-prince-prada-14-3-23",
    icon: "fresh juice",
    img: "/fresh-juice/63-aksent-standing.png",
  },
];

export const mainLinks: LinkProps[] = [
  {
    title: "Plant Bass'd Home",
    link: "https://www.plantbassd.com",
    icon: "site",
  },
  {
    title: "Plantbass'd & Friends Top Ten Releases 2022",
    link: "https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf",
    icon: "spotify",
  },
  {
    title: "Plant Bass'd Soundcloud",
    link: "https://soundcloud.com/plantbassddjs",
    icon: "soundcloud",
  },
  {
    title: "Get In Contact",
    link: "https://www.plantbassd.com/team#get-in-touch",
    icon: "contact us",
  },
];
