import { IconType } from "components/Icon/types";
import { plantbassdInstagram } from "utils/constants";

interface IconsProps {
  link: string;
  name: IconType;
}

export const socialIcons: IconsProps[] = [
  {
    link: "https://www.facebook.com/plantbassddjs",
    name: "facebook",
  },
  {
    link: plantbassdInstagram,
    name: "instagram",
  },
  {
    link: "mailto: plantbassddjs@gmail.com",
    name: "email",
  },
  {
    link: "https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf",
    name: "spotify",
  },
  {
    link: "https://soundcloud.com/plantbassddjs",
    name: "soundcloud",
  },
  {
    link: "https://bandcamp.com/oisincampbellbap",
    name: "bandcamp",
  },
];
