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
    link: "mailto: plantbassdworld@gmail.com",
    name: "email",
  },
  {
    link: "https://ra.co/promoters/103854",
    name: "resident advisor",
  },
  {
    link: "https://soundcloud.com/plantbassdworld",
    name: "soundcloud",
  },
  {
    link: "https://bandcamp.com/oisincampbellbap",
    name: "bandcamp",
  },
];
