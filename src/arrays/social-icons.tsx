import { ReactElement } from "react";
import {
  BandcampIcon,
  EmailIcon,
  FacebookIcon,
  InstaIcon,
  RaIcon,
  SoundCloudIcon,
} from "components/Icon";
import { plantbassdInstagram } from "utils/constants";
import { IconType } from "components/Icon/types";

interface IconsProps {
  link: string;
  icon: ReactElement;
  name: IconType;
}

export const socialIcons: IconsProps[] = [
  {
    link: "https://www.facebook.com/plantbassddjs",
    icon: <FacebookIcon />,
    name: "Facebook" as IconType,
  },
  {
    link: plantbassdInstagram,
    icon: <InstaIcon />,
    name: "Instagram" as IconType,
  },
  {
    link: "mailto: plantbassdworld@gmail.com",
    icon: <EmailIcon />,
    name: "Email" as IconType,
  },
  {
    link: "https://ra.co/promoters/103854",
    icon: <RaIcon />,
    name: "resident advisor",
  },
  {
    link: "https://soundcloud.com/plantbassdworld",
    icon: <SoundCloudIcon />,
    name: "SoundCloud" as IconType,
  },
  {
    link: "https://bandcamp.com/oisincampbellbap",
    icon: <BandcampIcon />,
    name: "Bandcamp" as IconType,
  },
];
