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
  {
    title: "Under the Radar: November",
    link: "https://www.plantbassd.com/under-the-radar/november-23",
    name: "under the radar",
    description:
      "Remember, remember, the hits of November! The year is fizzling out. Stock up on the best of last month before the festive craze takes over.",
    img: "/under-the-radar/november.jpg",
  },
  {
    title: "In Depth With Sevy",
    link: "https://www.plantbassd.com/news/in-depth-with-sevy-5-12-23",
    name: "news",
    description:
      "Multi-faceted Zambian/ Malawian act Sevy drifts on to London’s Tobago Tracks with elegance on his forward-facing ‘Merry Go Creek’ EP.",
    img: "/news/51-sevy.jpg",
  },
  {
    title: "FRESH JUICE: 'Stepping Out' by Ouanounou & Gipsyan (Monstart)",
    link: "https://www.plantbassd.com/fresh-juice/ouanounou-gipsyan-29-11-23",
    name: "fresh juice",
    description:
      "Innovative French imprint Monstart celebrate their 20th release with the otherworldly bass score, ‘Stepping Out’, coming from label head Ouanounou & Montpellier producer Gipsyan.",
    img: "/fresh-juice/68-stepping-out.jpg",
  },
  {
    title: "Wanna War We I Know Why by Sevy",
    link: "https://on.soundcloud.com/jX4z1",
    name: "premieres",
    description: "A hypnotic naarm inspired R&B and soul transmission from Sydney based act Sevy",
    img: "/premieres/63-sevy.jpg",
  },
  {
    title: "Serotona by Drumheller",
    link: "https://soundcloud.com/plantbassddjs/premiere-drumheller-serotona",
    name: "premieres",
    description: "Baile meets drill on Drumheller's hot and weighty bass runner",
    img: "/premieres/62-drumheller.jpg",
  },
  {
    title: "Under the Radar: October",
    link: "https://www.plantbassd.com/under-the-radar/october-23",
    name: "under the radar",
    description:
      "Overlooked October gems that didn't get the full attention they deserved with releases from Diessa, Toby Ross, and more.",
    img: "/under-the-radar/october.jpg",
  },
  {
    title: "Signal by Marie Wilhelmine Anders",
    link: "https://soundcloud.com/plantbassddjs/premiere-marie-wilhelmine-anders-signal-1",
    name: "premieres",
    description: "Heady old-skool inspired drum & bass from Berliner Marie Wilhelmine Anders",
    img: "/premieres/61-marie.jpg",
  },
  {
    title: "WOW by Aitunz ft. Pocket Tincho",
    link: "https://on.soundcloud.com/6cXWx",
    name: "premieres",
    description: "Emotional club from Bogota via Aitunz & Pocket Tincho on city label traaampaaa.",
    img: "/premieres/60-wow.jpg",
  },
  {
    title: "NARCISSUS by darkitecture",
    link: "https://soundcloud.com/plantbassddjs/premiere-darkitecture-narcissus",
    name: "premieres",
    description:
      "Alarming techno chase from darkitecture on Tripalium Corp's 'Fucked-Up Squad Vol.2'",
    img: "/premieres/59-darkitecture.jpg",
  },
  {
    title: "Foamy Nites by Small Bear (Ethereal Skies)",
    link: "https://on.soundcloud.com/mZorg",
    name: "premieres",
    description:
      "Primitive Dublin rave from Small Bear on the exciting Ethereal Skies compilation, 'Aerga Vol. 1'.",
    img: "/premieres/58-small-bear.jpg",
  },
  {
    title: "Ethereal Skies Announce debut V/A 'Aerga Vol.1'",
    link: "https://www.plantbassd.com/news/ethereal-skies-20-10-23",
    name: "news",
    description:
      "Ethereal Skies Announce debut V/A 'Aerga Vol. 1', featuring trax from E the Artist, Julia Louise KnifeFist, SONIA & more.",
    img: "/news/49-ethereal.jpg",
  },
  {
    title: "Will You by Singularnost",
    link: "https://soundcloud.com/plantbassddjs/premiere-singularnost-will-you",
    name: "premieres",
    img: "/premieres/57-singularnost.jpg",
    description:
      "Tight-knit UKG from the Tokyo-based Singularnost on Noizy Wilson's Nü Kvlture imprint",
  },
  {
    title: "Under the Radar: September",
    link: "https://www.plantbassd.com/under-the-radar/september-23",
    name: "under the radar",
    description:
      "Peering into tomorrow's Bandcamp Friday, we take a look at some of the standout releases from the month gone by that you may have missed out on.",
    img: "/under-the-radar/september.jpg",
  },
  {
    title: "Subterranean Sound 2023 Preview",
    link: "https://www.plantbassd.com/news/subterranean-sound-4-10-23",
    name: "news",
    description:
      "Subterranean Sound reboots for its second instalment this weekend at Edinburgh’s Sweetdram Distillery",
    img: "/news/48-subterranean-sound.jpg",
  },
  {
    title: "FRESH JUICE: 'Floating Mists, Warm Vistas' by Vell",
    link: "https://www.plantbassd.com/fresh-juice/vell-27-9-23",
    name: "fresh juice",
    description:
      "Boiled Wonderland Records co-founder Vell debuts on the imprint with a string of techno mutations on the ‘Floating Mists, Warm Vistas’ EP, with a rave embodied remix from Dubai’s Rudoh.",
    img: "/fresh-juice/67-vell.jpg",
  },
  {
    title: "On site at Fuinneamh Festival 2023",
    link: "https://www.plantbassd.com/news/fuinneamh-review-26-9-23",
    name: "news",
    description:
      "Another festival season is in the books, and once again we were blessed to spend this year's finale at the beautifully defiant Fuinneamh.",
    img: "/news/47-fuinneamh.jpg",
  },
  {
    title: "Burning Trees (Rudoh Remix) by Vell",
    link: "https://on.soundcloud.com/XeQf2",
    name: "premieres",
    description:
      "Rudoh adds a magnificent breakbeat element to Vell's 'Burning Trees' on Boiled Wonderland Recs (Bangkok)",
    img: "/premieres/56-vell.jpg",
  },
  {
    title: "Fuinneamh Festival 2023 Guide",
    img: "/news/45-fuinneamh.jpg",
    link: "https://www.plantbassd.com/news/fuinneamh-13-9-23",
    name: "news",
    description:
      "The Irish festival season prepares for its grandest of finales this weekend with the almighty Fuinneamh offering up their biggest instalment to date.",
  },
  {
    title: "Under the Radar: August",
    link: "https://www.plantbassd.com/under-the-radar/august-23",
    name: "under the radar",
    description:
      "Sharing some extra hot trax from last month as the September sun inexplicably bakes down on us! Featuring speedy tools, hip-hop transmissions and much more from acts like Yazzus, Small Crab, Divoli S’vere, and more",
    img: "/under-the-radar/august.jpg",
  },
  {
    title: "Cosi by Dites Safran",
    link: "https://on.soundcloud.com/BLauL",
    name: "premieres",
    description: "Descriptive and textured low end hard drum from French artist Dites Safran",
    img: "/premieres/55-safran.jpg",
  },
  {
    title: "Throwing Elbows by LO CHI",
    link: "https://soundcloud.com/plantbassddjs/premiere-lo-chi-throwing-elbows",
    name: "premieres",
    img: "/premieres/54-lo-chi.jpg",
    description:
      "Bristol electro via Perth from LO CHI on the debut release from the Different Intel imprint.",
  },
  {
    title: "Pretty Girls Walk (SMIFF'S Seriously Drummy Rework)",
    link: "https://on.soundcloud.com/bNTdN",
    name: "premieres",
    description:
      "A slamming hard drum rendition of Big Boss Vette's 'Pretty Girls Walk' from Edinburgh bass boss SMIFF",
    img: "/premieres/53-smiff.jpg",
  },
  {
    title: "Que Paso by CRRDR",
    link: "https://soundcloud.com/plantbassddjs/premiere-crrdr-que-paso",
    name: "premieres",
    description:
      "Bogota baddie CRRDR unleashes their next collection of sounds with the tongue in cheek ferocity of the 'SUwUMMER' EP.",
    img: "/premieres/52-crrdr.jpg",
  },
  {
    title: "On site at All Together Now 2023",
    link: "https://www.plantbassd.com/news/all-together-now-review-10-8-23",
    name: "news",
    description:
      "All Together Now wrapped up their 4th successful year of joyous celebration with a mixed bag of heavy rain, high winds, and scorching Sun.",
    img: "/news/42-atn.jpg",
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
    title: "13 Irish acts you need to see at All Together Now 2023",
    img: "/news/41-atn.jpg",
    link: "https://www.plantbassd.com/news/all-together-now-3-8-23",
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
