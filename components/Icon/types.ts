import { ReactElement } from "react";

export type IconType =
  | "bandcamp"
  | "contact us"
  | "email"
  | "home"
  | "facebook"
  | "fresh juice"
  | "gig"
  | "gigs"
  | "instagram"
  | "links"
  | "mixes"
  | "news"
  | "premiere"
  | "premieres"
  | "radio"
  | "search"
  | "site"
  | "soundcloud"
  | "spotify"
  | "takeovers"
  | "tickets"
  | "empty";

export interface SocialIconProps {
  icon: IconType;
  styling?: string;
}

export type IconMapType = {
  [key in IconType]: ReactElement;
};

export interface SocialProps {
  name: IconType;
  url: string;
  icon?: string;
  style?: string;
}
