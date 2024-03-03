import {
  BandcampIcon,
  BookIcon,
  EmailIcon,
  EmptyIcon,
  FacebookIcon,
  HomeIcon,
  InstaIcon,
  LemonIcon,
  LinkIcon,
  NewsIcon,
  RadarIcon,
  RadioIcon,
  RaIcon,
  SearchIcon,
  SoundCloudIcon,
  SpeakerIcon,
  SpotifyIcon,
  TicketIcon,
} from "components/Icon";
import { IconMapType, IconType } from "./types";

const IconMap: IconMapType = {
  bandcamp: <BandcampIcon />,
  "contact us": <BookIcon />,
  email: <EmailIcon />,
  home: <HomeIcon />,
  facebook: <FacebookIcon />,
  "fresh juice": <LemonIcon />,
  gig: <TicketIcon />,
  gigs: <TicketIcon />,
  instagram: <InstaIcon />,
  links: <LinkIcon />,
  mixes: <SoundCloudIcon />,
  news: <NewsIcon />,
  premiere: <SpeakerIcon />,
  premieres: <SpeakerIcon />,
  "resident advisor": <RaIcon />,
  radio: <RadioIcon />,
  search: <SearchIcon />,
  site: <HomeIcon />,
  soundcloud: <SoundCloudIcon />,
  spotify: <SpotifyIcon />,
  takeovers: <SpotifyIcon />,
  tickets: <RaIcon />,
  empty: <EmptyIcon />,
  "under the radar": <RadarIcon />,
};

export interface SocialIconProps {
  name: IconType;
}

export const Icon = ({ name }: SocialIconProps) => {
  return IconMap[name.toLowerCase()];
};
