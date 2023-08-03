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
    title: "INVT & Neffa-T Early Access",
    link: "https://ra.co/promoters/103854",
    name: "tickets",
  },
  {
    title: "EDINBURGH CLUB GUIDE: Fringe Special 2023",
    link: "https://www.plantbassd.com/guides/edi-fringe-fest-2-8-23",
    name: "news",
    description:
      "It's 5AM clubbing season in the Scottish capital yet again as Fringe festivities take over for the month of August.",
    img: "/news/40-fringe.jpg",
  },
  {
    title: "10 Irish acts you need to see AT All Together Now 2023",
    img: "/news/41-atn.jpg",
    link: "https://www.plantbassd.com/news/ten-at-atn-3-8-23",
    name: "news",
    description:
      "ATN returns to Curraghmore Estate in Co Waterford for its fourth instalment with a packed out selection of artists, entertainers, and vendors",
  },
  {
    title: "Under the Radar: July",
    img: "/under-the-radar/july.jpg",
    link: "https://www.plantbassd.com/under-the-radar/july-23",
    name: "news",
    description:
      "Listen to high octane releases from Doss, Jun Kamoda, and Jersey and pick up some free downloads as well as some Bandcamp Friday recommends from yours truly",
  },
  {
    title: "FRESH JUICE: 'Better Be Careful' by Rassan (Nice & Deadly)",
    link: "https://www.plantbassd.com/fresh-juice/rassan-20-7-23",
    name: "fresh juice",
    description:
      "Brazilian label and party series Nice & Deadly return with their 21st release coming from co-founder Rassan with the rousing bass of ‘Better Be Careful’, fired home with a deadly remixing effort Stones Taro.",
    img: "/fresh-juice/67-careful.jpg",
  },
  {
    title: "In Depth with WNCL Recordings",
    link: "https://www.plantbassd.com/news/in-depth-with-wncl-6-7-23",
    name: "news",
    description:
      "WNCL Recordings continue to soar with their current 2-track 10” vinyl series pushing soundsystem weaponry",
    img: "/news/38-wncl.jpg",
  },
  {
    title: "'Ticking' by Hngwy",
    link: "https://soundcloud.com/plantbassddjs/premiere-ticking-by-hngwy",
    name: "premiere",
    description: "Tripped out low end half-time from Glasgow's Hngwy on Hang Tough Records",
    img: "/premieres/51-hngwy.jpg",
  },
  {
    title: "Under the Radar: June",
    img: "/under-the-radar/june.jpg",
    link: "https://www.plantbassd.com/under-the-radar/june-23",
    name: "news",
    description:
      "The summer heat continues to sizzle with June producing yet another month of club and festival booth fire. Here are some of our favourites going into Bandcamp Friday tomorrow.",
  },
  {
    title: "On site at Body And Soul 2023",
    link: "https://www.plantbassd.com/news/body-and-soul-23-6-23",
    name: "news",
    description: "Enjoyable experiences hidden in a very difficult and taxing Body and Soul 2023",
    img: "/news/37-bas.jpg",
  },
  {
    title: "In Depth with SPHERES",
    link: "https://www.plantbassd.com/news/in-depth-with-spheres-20-6-23",
    name: "news",
    description:
      "We spoke to Rob Rua from the label about the foundations, process and the challenges in bringing this new series to life.",
    img: "/news/36-in-depth.jpg",
  },
  {
    title: "Under the Radar: May",
    link: "https://www.plantbassd.com/under-the-radar/may-23",
    name: "news",
    img: "/under-the-radar/may.jpg",
    description:
      "Hear the creative directions being influenced by Summer weather in this May Under The Radar with new fun & bouncy releases from the likes of Gemi, Selky, & more",
  },
  {
    title: "'Be My Lover' by DJ Ageless Wonder",
    link: "https://soundcloud.com/plantbassddjs/premiere-dj-ageless-wonder-be-my-lover",
    name: "premieres",
    img: "/premieres/50-ageless.jpg",
    description:
      "Amsterdam's DJ Ageless Wonder rides on high on a ghetto house pump with 'BE MY LOVER'.",
  },
  {
    title: "'Core Work' by Sweet Philly",
    link: "https://on.soundcloud.com/VdwKs",
    name: "premieres",
    img: "/premieres/49-trust-fall.jpg",
  },
  {
    title: "'Denial' by Midnight Totem",
    link: "https://soundcloud.com/plantbassddjs/premiere-midnight-totem-denial",
    name: "premieres",
    img: "/premieres/48-midnight-totem.jpg",
  },
  {
    title: "FRESH JUICE: 'The End Of All Physical Form' by J-SHADOW",
    link: "https://www.plantbassd.com/fresh-juice/j-shadow-19-5-23",
    name: "fresh juice",
    img: "/fresh-juice/66-j-shadow.jpg",
  },
  {
    title: "'Y' by Overkissed",
    link: "https://soundcloud.com/plantbassddjs/premiere-overkissed-y",
    name: "premieres",
    img: "/premieres/47-overkissed.jpg",
  },
  {
    title: "Under the Radar: April",
    link: "https://www.plantbassd.com/under-the-radar/april-23",
    name: "news",
    img: "/under-the-radar/april.jpg",
  },
  {
    title: "'Walk down a dark path' by c0sti",
    link: "https://on.soundcloud.com/mGRY3",
    name: "premieres",
    img: "/premieres/46-c0sti.jpg",
  },
  {
    title: "'Cobweb Thread' by Asa Nisi Masa",
    link: "https://on.soundcloud.com/FbrVS",
    name: "premieres",
    img: "/premieres/45-asa-nisi.jpg",
  },
  {
    title: "'Superviolet Romance' by Brenda",
    link: "https://soundcloud.com/plantbassddjs/premiere-brenda-superviolet-romance",
    name: "premieres",
    img: "/premieres/44-brenda.jpg",
  },
];

export const mainLinks: LinkProps[] = [
  {
    title: "Plant Bass'd Home",
    link: "https://www.plantbassd.com",
    name: "site",
  },
  {
    title: "Plantbass'd & Friends Top Ten Releases 2022",
    link: "https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf",
    name: "spotify",
  },
  {
    title: "Plant Bass'd Soundcloud",
    link: "https://soundcloud.com/plantbassddjs",
    name: "soundcloud",
  },
  {
    title: "Get In Contact",
    link: "https://www.plantbassd.com/team#get-in-touch",
    name: "contact us",
  },
];
