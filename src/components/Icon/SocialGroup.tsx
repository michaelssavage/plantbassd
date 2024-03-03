import { SocialIcon } from "components/Icon";
import { IconType } from "./types";

interface SocialGroupI {
  icons: IconType[];
}

export const SocialGroup = ({ icons }: SocialGroupI) => {
  return (
    <div className="d-flex justify-content-center gap-3 my-3">
      {icons.map((icon) => {
        return <SocialIcon key={icon} text={icon} />;
      })}
    </div>
  );
};
