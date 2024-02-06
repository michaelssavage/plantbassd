import { IconType } from "components/Icon/types";

export interface LinkProps {
  title: string;
  link: string;
  name: IconType;
  description?: string;
  img?: string;
}

export const linkList: LinkProps[] = [
  {
    title: "Plant Bass'd presents Organica",
    img: "/gigs/54-organica.jpg",
    link: "https://ra.co/events/1828740",
    name: "tickets",
    description:
      "Plant Bass'd is back in Galway this time in The Cellar bringing Fresh & Organic goodness for you loved up steppers!! Bring your Sweet Valentine or let Cupid do their bidding <3",
  },
  {
    title: "Mumbai Dreamhunter by Chhabb",
    link: "https://soundcloud.com/plantbassddjs/premiere-chhabb-mumbai-dreamhunter",
    name: "premiere",
    description: "Club Music for Palestine via Delhi label Antariksh Records",
  },
  {
    title: "13th by Noizy Wilson",
    img: "/premieres/66-noizy.jpg",
    link: "https://soundcloud.com/plantbassddjs/premiere-noizy-wilson-13th-bonefm",
    name: "premiere",
    description: "Stimulating breakbeat techno from Noizy Wilson on New Delhi imprint Bøne.FM",
  },
  {
    title: "'Trust In U' by Lushed",
    link: "https://www.plantbassd.com/fresh-juice/lushed-26-1-24",
    name: "fresh juice",
    description:
      "Galway-raised, Dublin-based producer Lushed (Song Du) releases his debut EP with three electrifying tracks.",
    img: "/fresh-juice/69-trust-in-u.jpg",
  },
  {
    title: "Limbo de Ubers by Callwso",
    img: "/premieres/66-callwso.jpg",
    link: "https://soundcloud.com/plantbassddjs/premiere-callwso-limbo-de-ubers",
    name: "premieres",
    description: "Explosive Latin drum driller from Argentinian prodcuer Callwso",
  },
  {
    title: "ClipSchwifter by SMIFF",
    img: "/premieres/65-smiff.jpg",
    link: "https://soundcloud.com/plantbassddjs/premiere-smiff-clipschwifter",
    name: "premieres",
    description: "Electro drum runner from Edinburgh producer SMIFF",
  },
  {
    title: "Sunset Showdown by Musley",
    img: "/premieres/64-kvlture.jpg",
    link: "https://soundcloud.com/plantbassddjs/premiere-musley-sunset-showdown",
    name: "premieres",
    description: "Atmpospheric breakbeat epic from Polish artist Musley out on NÜ KVLTURE",
  },
  {
    title: "Arusa Qureshi - Top 10 Picks Of The Year",
    img: "/top-ten-releases/23-arusa.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/arusa-qureshi-21-20-23",
    name: "news",
    description:
      "Trailblazing author of the story of women in hip-hop; ‘Flip The Script’, Arusa Qureshi travels through her 10 favourite releases from 2023!",
  },
  {
    title: "Ten Years Lost - Top 10 Picks Of The Year",
    img: "/top-ten-releases/22-ten-years.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/ten-years-lost-20-12-23",
    name: "news",
    description:
      "International Chromie, Ten Years Lost takes us through his 10 favourite releases from the last 12 months!",
  },
  {
    title: "CRRDR - Top 10 Picks Of The Year",
    img: "/top-ten-releases/21-crrdr.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/crrdr-19-18-23",
    name: "news",
    description:
      "CRRDR marks the year off with his top ten picks of 2023, focusing on the LatinCore sound.",
  },
  {
    title: "plaintainchipps - Top 10 Picks Of The Year",
    img: "/top-ten-releases/20-plantainchipps.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/plantainchipps-18-12-23",
    name: "news",
    description:
      "A key player in Glasgow’s club scene, Plantainchipps takes us through their top 10 releases of the year!",
  },
  {
    title: "Ádhamh - Top 10 Picks Of The Year",
    img: "/top-ten-releases/19-adhamh.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/adhamh-15-12-23",
    name: "news",
    description:
      "Ádhamh (Adam Ryan) shares his ultimate 2023 IDM & rave inspired picks in descending order.",
  },
  {
    title: "Hu-Sane - Top 10 Picks Of The Year",
    img: "/top-ten-releases/18-hu-sane.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/hu-sane-14-12-23",
    name: "news",
    description:
      "Specialist Glasgow selector and producer Hu-Sane rattles through her favourite records from 2023.",
  },
  {
    title: "Doubt - Top 10 Picks Of The Year",
    img: "/top-ten-releases/17-doubt.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/doubt-13-12-23",
    name: "news",
    description:
      "Flood co-founder Doubt takes us through his clubbing delights from 2023, encompassing his love of percussive bass, with some of the imprint's own productions, as well as some sneaky pop tones!",
  },
  {
    title: "Key-In - Top 10 Picks Of The Year",
    img: "/top-ten-releases/16-key-in.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/key-in-12-12-23",
    name: "news",
    description:
      "Key-In (Cian Gilvarry) provides his favourite picks of the year highlighting his appetite for slower tempo electronic tunes that hit hard with impactful low-end goodness and textured drums.",
  },
  {
    title: "angel.world - Top 10 Picks Of The Year",
    img: "/top-ten-releases/15-angel.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/angel-world-11-12-23",
    name: "news",
    description: "Glasgow's trance enabler angel.world dives into the sounds that made their 2023.",
  },
  {
    title: "JWY - Top 10 Picks Of The Year",
    img: "/top-ten-releases/14-jwy.jpg",
    link: "https://www.plantbassd.com/top-ten-releases/jwy-8-12-23",
    name: "news",
    description:
      "Founder of Foxgluv, JWY, shares her top ten picks of 2023. The Dublin based DJ was key to big nights out this year for Rathaus, Ar Ais Arís, and Honeypot Club among many others.",
  },
];

export const mainLinks: LinkProps[] = [
  {
    title: "Home",
    link: "https://www.plantbassd.com",
    name: "site",
  },
  {
    title: "Soundcloud",
    link: "https://soundcloud.com/plantbassddjs",
    name: "soundcloud",
  },
  {
    title: "Resident Advisor",
    link: "https://ra.co/promoters/103854",
    name: "resident advisor",
  },
  {
    title: "Our Team",
    link: "https://www.plantbassd.com/team#get-in-touch",
    name: "contact us",
  },
];
