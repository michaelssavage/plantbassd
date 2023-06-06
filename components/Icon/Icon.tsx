import { AiFillHome, AiOutlineLink, AiOutlineSearch } from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { BsFacebook, BsFillVolumeUpFill, BsInstagram, BsMailbox2, BsSpotify } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { GrSoundcloud } from "react-icons/gr";
import { IconContext } from "react-icons";
import { ImNewspaper } from "react-icons/im";
import { MdLocalDrink } from "react-icons/md";
import { SiBandcamp } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { useMemo } from "react";
import { RxValueNone } from "react-icons/rx";

interface SocialIconProps {
  icon: string;
  styling?: string;
}

const IconMap = {
  bandcamp: <SiBandcamp />,
  "contact us": <TiContacts />,
  email: <BsMailbox2 />,
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
  radio: <BiRadio />,
  search: <AiOutlineSearch />,
  site: <AiFillHome />,
  soundcloud: <GrSoundcloud />,
  spotify: <BsSpotify />,
  takeovers: <FaSpotify />,
  tickets: <GiTicket />,
  empty: <RxValueNone />,
};

export const Icon = ({ icon, styling = "navIcon" }: SocialIconProps) => {
  const styleMemo = useMemo(() => ({ className: styling }), [styling]);
  return (
    <IconContext.Provider value={styleMemo}>{IconMap[icon.toLowerCase()]}</IconContext.Provider>
  );
};
