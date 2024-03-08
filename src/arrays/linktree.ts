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
    title: "C€LTIC ERECTIONS",
    img: "/gigs/55-celtic.jpg",
    link: "https://ra.co/events/1867088",
    name: "tickets",
    description:
      "Glasgow - 17th March 2024\n\nHAPPY SAINT FUCKING PATTY'S DAY ME OLD FLOWERS! IT'S AROUND THAT TIME OF YEAR AGAIN WHEN WE CELEBRATE OUR GREATEST EVER WELSHMIN, OUR HOLY PATRON SAINT PATRICK.",
  },
  {
    title: "Serotone - Breaking Boundaries",
    img: "/premieres/72-serotone.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-serotone-breaking-boundaries",
    name: "premiere",
    description:
      "Glasgow's Hang Tough returns with a tight knit 3 tracker from Scottish act Serotone.",
  },
  {
    title: "Under The Radar - Jan / Feb",
    img: "/under-the-radar/february-24.jpg",
    link: "https://www.plantbassd.com/under-the-radar/february-24",
    name: "under the radar",
    description:
      "It's taken us a little bit of time to get back into the swing of things with the slow paced start to the new year. Release wise it’s been non stop from talents around the world. Enjoy our round up of the best underground music from the opening two months of 2024.",
  },
  {
    title: "Timo Torben - Where Do We Go From Here",
    img: "/premieres/71-denholm.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-timo-torben-where-do-we-go-from-here",
    name: "premiere",
    description:
      "Edinburgh party series & label DRIFT celebrates 5 years in operation with a very special 12 track compilation.",
  },
  {
    title: "Pralaya - Bounce It On The Floor",
    img: "/premieres/70-pralaya.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-pralaya-bounce-it-on-the-floor",
    name: "premiere",
    description:
      "Bogota's Fourtwenty Sound launches new project Sonora Destroy Records, a new window for electronic music in LATAM and Spain seeking to banish the boundaries between genres that define these areas.",
  },
  {
    title: "Cat Lady - BB LOCK HEART",
    img: "/premieres/69-premiere.jpg",
    link: "https://soundcloud.com/plantbassdworld/cat-lady-bb-lock-heart",
    name: "premiere",
    description:
      "Cat Lady lands on BASS WATER FREAK OUT with the torpedo turbulence of the “110, New Town” EP.",
  },
  {
    title: "I'll Know by Mercy System",
    img: "/premieres/68-mercy.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-mercy-system-ill-know",
    name: "premiere",
    description:
      "Dark grooves of dystopian acidic squelches immersed in thick ridged breakdowns of breaks & bass",
  },
  {
    title: "Zygomatic Process Of The Frontal Bone by Miss Kotton",
    img: "/premieres/67-chabb.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-miss-kotton-zygomatic-process-of-the-frontal-bone",
    name: "premiere",
    description: "Club Music for Palestine. Melodic Breakcore from the Delhi based Miss Kotton",
  },
  {
    title: "Mumbai Dreamhunter by Chhabb",
    link: "https://soundcloud.com/plantbassdworld/premiere-chhabb-mumbai-dreamhunter",
    name: "premiere",
    description: "Club Music for Palestine via Delhi label Antariksh Records",
    img: "/premieres/67-chabb.jpg",
  },
  {
    title: "13th by Noizy Wilson",
    img: "/premieres/66-noizy.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-noizy-wilson-13th-bonefm",
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
    link: "https://soundcloud.com/plantbassdworld/premiere-callwso-limbo-de-ubers",
    name: "premieres",
    description: "Explosive Latin drum driller from Argentinian prodcuer Callwso",
  },
  {
    title: "ClipSchwifter by SMIFF",
    img: "/premieres/65-smiff.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-smiff-clipschwifter",
    name: "premieres",
    description: "Electro drum runner from Edinburgh producer SMIFF",
  },
  {
    title: "Sunset Showdown by Musley",
    img: "/premieres/64-kvlture.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-musley-sunset-showdown",
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
    name: "home",
  },
  {
    title: "Soundcloud",
    link: "https://soundcloud.com/plantbassdworld",
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
