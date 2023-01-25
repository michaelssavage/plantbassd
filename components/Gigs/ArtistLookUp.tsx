import { GuestProps } from "arrays/previous-guests";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

export const ArtistLookUp = (name: string, len: number, djs: GuestProps[]) => {
  for (let idx = 0; idx < len; idx++) {
    const record = djs[idx];
    if (name.toLowerCase() === record.name.toLowerCase()) {
      return (
        <div className="col-6 col-lg-6 col-md-6 col-6" key={record.name}>
          <Picture alt={`${record.name} press pic`} size={300} src={`/news/${record.img}`} />
          <HoverLink url={`www.instagram.com/${record.link}`} name={record.name} external />
        </div>
      );
    }
  }
};
