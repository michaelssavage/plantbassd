import { AiFillHome, AiOutlineLink } from "react-icons/ai";
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

interface SwitcherProps {
  icon: string;
}

interface SocialIconProps {
  icon: string;
  styling?: string;
}

function Switcher({ icon }: SwitcherProps) {
  switch (icon.toLowerCase()) {
    case "home":
      return <AiFillHome />;
    case "news":
      return <ImNewspaper />;
    case "mixes":
      return <GrSoundcloud />;
    case "takeovers":
      return <FaSpotify />;
    case "radio":
      return <BiRadio />;
    case "contact us":
      return <TiContacts />;
    case "links":
      return <AiOutlineLink />;
    case "facebook":
      return <BsFacebook />;
    case "instagram":
      return <BsInstagram />;
    case "email":
      return <BsMailbox2 />;
    case "soundcloud":
      return <GrSoundcloud />;
    case "bandcamp":
      return <SiBandcamp />;
    case "fresh juice":
      return <MdLocalDrink />;
    case "tickets":
      return <GiTicket />;
    case "gigs":
      return <GiTicket />;
    case "site":
      return <AiFillHome />;
    case "premieres":
      return <BsFillVolumeUpFill />;
    default:
      return <BsSpotify />;
  }
}

export default function SocialIcon({ icon, styling = "navIcon" }: SocialIconProps) {
  const styleMemo = useMemo(() => ({ className: styling }), [styling]);
  return (
    <IconContext.Provider value={styleMemo}>
      <Switcher icon={icon} />
    </IconContext.Provider>
  );
}
