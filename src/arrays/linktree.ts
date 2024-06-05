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
    title: "Henry Greenleaf - Get the Hell Out ",
    img: "/premieres/81-henry.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-henry-greenleaf-get",
    name: "premieres",
    description:
      "Australian label Different Intel continue on their recent run of form with the imprints first vinyl release arriving via Henry Greenleaf’s ‘Keepsake’ EP.",
  },
  {
    title: "gullydoctor - Prince Heavy Shocker",
    img: "/premieres/80-gully.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-gully-doctor-prince-heavy-shocker",
    name: "premieres",
    description:
      "gullydoctor's 'Prince Heavy Shocker' is a speedy groover with rich textures, guitar solos, and fun sample usage",
  },
  {
    title: "Under The Radar - April",
    img: "/under-the-radar/april-24.jpg",
    link: "https://www.plantbassd.com/under-the-radar/april-24",
    name: "under the radar",
    description:
      "As we transition back into sunnier times, we take a quick look back at this best from April as spring begins to fizzle out! Tuck into a diverse range of sounds from global acts like Girl Tool, Lukrø, Dj Babatr, System 108 & more.",
  },
  {
    title: "Wrong Dome - No Slangs",
    img: "/premieres/79-wrong-dome.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-wrong-dome-no-slangs",
    name: "premieres",
    description:
      "Slovakia's Wrong Dome shares a snippet into forthcoming album 'KULOARE AKTUAL' with some half-time magic on 'No Slangs'.",
  },
  {
    title: "The JLB - Lick the World (Tobago Tracks)",
    img: "/premieres/78-jlb.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-the-jlb-lick-the-world",
    name: "premieres",
    description:
      "A bouncy two step shuffler brimmed with dialled up samples, orchestral clashes and warped synth work.",
  },
  {
    title: "Capiuz - Fiori Notturni (Over My Body)",
    img: "/premieres/77-capiuz.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-capiuz-fiori-notturni",
    name: "premieres",
    description:
      "A swooning drum track forging metallic percussion with ridging kicks, crafting a rigid balance between groove and pow.",
  },
  {
    title: "Macalla Festival debuts Saturday 20th of July 2024",
    img: "/news/52-macalla-festival.jpg",
    link: "https://www.plantbassd.com/news/macalla-festival-19-4-24",
    name: "news",
    description:
      "Macalla Festival will be held in Keadeen Mountain Farms, and is sure to be an exciting combination of Gaeilge and SoundSystem Culture.",
  },
  {
    title: "FRESH JUICE: Ar Ais Arís",
    img: "/fresh-juice/70-aaa.jpg",
    link: "https://www.plantbassd.com/fresh-juice/ar-ais-aris-12-4-24",
    name: "fresh juice",
    description:
      "Is there another party that has cracked Irish grooves like Ar Ais Arís (AAA) since its inception back in 2022?",
  },
  {
    title: "Under The Radar - March",
    img: "/under-the-radar/march-24.jpg",
    link: "https://www.plantbassd.com/under-the-radar/march-24",
    name: "under the radar",
    description: "Celebrating Spring energy from new friends and new faces.",
  },
  {
    title: "NirBorna - Monsoon (Vief Records)",
    img: "/premieres/76-nirborna.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-nirborna-monsoon-vief-records",
    name: "premieres",
    description:
      "Vief's next fundraiser compilation is raising money for Palestine Solidarity Campaign to aid their work in building public support for an end to the atrocities currently taking place in Gaza.",
  },
  {
    title: "Provost - Static",
    img: "/premieres/75-provost.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-provost-static",
    name: "premieres",
    description:
      "Tantalising and aggressive throughout, Provost marks his debut EP out in style with 3 tracks of blistering UK tinged techno fitted with Palidrone's growing hallmarks of dense percussion, ridging kicks, alluring vocal chops and bass rumblings.",
  },
  {
    title: "20 Sevens - Honest",
    img: "/premieres/74-sevens.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-20-sevens-honest",
    name: "premieres",
    description:
      "Florida act '20 Sevens' breathes new life on London's Tobago Tracks with a soundscape of life on 'Here I am here I am here I am, so glad you are so glad you are so glad you are'.",
  },
  {
    title: "ETM - I Believe",
    img: "/premieres/73-believe.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-etm-i-believe",
    name: "premieres",
    description:
      "Gorgeous, angelic, bliss. Catalan sensation ETM sends us into emotional overdrive with this bygone breakbeat epic.",
  },
  {
    title: "Serotone - Breaking Boundaries",
    img: "/premieres/72-serotone.jpg",
    link: "https://soundcloud.com/plantbassdworld/premiere-serotone-breaking-boundaries",
    name: "premieres",
    description:
      "Glasgow's Hang Tough returns with a tight knit 3 tracker from Scottish act Serotone.",
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
