import { AiFillHome, AiOutlineLink, AiOutlineSearch } from "react-icons/ai";
import { BiRadar, BiRadio } from "react-icons/bi";
import { BsFacebook, BsFillVolumeUpFill, BsInstagram, BsSpotify } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { GrSoundcloud } from "react-icons/gr";
import { IconContext } from "react-icons";
import { ImNewspaper } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { MdLocalDrink } from "react-icons/md";
import { SiBandcamp } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { useMemo } from "react";
import { RxValueNone } from "react-icons/rx";
import { IconMapType, SocialIconProps } from "./types";
import { ResidentAdvisor } from "./ResidentAdvisor/ResidentAdvisor";

const IconMap: IconMapType = {
  bandcamp: <SiBandcamp />,
  "contact us": <TiContacts />,
  email: <IoMdMail />,
  home: <AiFillHome />,
  facebook: <BsFacebook />,
  "fresh juice": <MdLocalDrink />,
  gig: <GiTicket />,
  gigs: <GiTicket />,
  instagram: <BsInstagram />,
  links: <AiOutlineLink />,
  mixes: <GrSoundcloud />,
  news: <ImNewspaper />,
  premiere: <BsFillVolumeUpFill />,
  premieres: <BsFillVolumeUpFill />,
  "resident advisor": <ResidentAdvisor />,
  radio: <BiRadio />,
  search: <AiOutlineSearch />,
  site: <AiFillHome />,
  soundcloud: <GrSoundcloud />,
  spotify: <BsSpotify />,
  takeovers: <FaSpotify />,
  tickets: <GiTicket />,
  empty: <RxValueNone />,
  "under the radar": <BiRadar />,
};

export const Icon = ({ icon, styling = "navIcon", size = "2rem" }: SocialIconProps) => {
  const styleMemo = useMemo(() => ({ className: styling, size: size }), [size, styling]);
  return (
    <IconContext.Provider value={styleMemo}>{IconMap[icon.toLowerCase()]}</IconContext.Provider>
  );
};
