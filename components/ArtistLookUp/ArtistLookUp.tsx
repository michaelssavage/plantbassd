import { GuestProps } from "arrays/previous-guests";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

interface LookUpProps {
  anames: string[];
  djs: GuestProps[];
}

export const ArtistLookUp = ({ anames, djs }: LookUpProps) => {
  return (
    <div className="row">
      {anames.map((name) => {
        for (let idx = 0; idx < djs.length; idx++) {
          const record = djs[idx];
          if (name.toLowerCase() === record.name.toLowerCase()) {
            return (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={record.name}>
                <Picture alt={`${record.name} press pic`} size={300} src={`/news/${record.img}`} />
                <div className="w-100"></div>
                <HoverLink url={`www.instagram.com/${record.link}`} name={record.name} external />
              </div>
            );
          }
        }
      })}
    </div>
  );
};
