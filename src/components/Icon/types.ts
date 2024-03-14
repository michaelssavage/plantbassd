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
  | "resident advisor"
  | "search"
  | "site"
  | "soundcloud"
  | "spotify"
  | "takeovers"
  | "tickets"
  | "empty"
  | "under the radar";

export type IconMapType = {
  [key in IconType]: ReactElement;
};

export type SocialIconType =
  | "instagram"
  | "soundcloud"
  | "bandcamp"
  | "email"
  | "resident advisor"
  | "spotify";
