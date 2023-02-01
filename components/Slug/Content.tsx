import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

interface ContentProps {
  title: string;
  pic: string;
  link: string;
  description: string;
  standout?: string;
  tags: string;
}

export const Content = ({ title, pic, link, description, standout, tags }: ContentProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="row display-flex align-items-center">
        <div className="col clubGuide">
          <Picture src={pic} alt={title} size={1200} />
        </div>
        <div className="col clubGuide">
          <div>
            {description}
            <br />
            <br />
            <strong>{standout}</strong>
            <br />
            {tags}
          </div>
          <br />
          Bandcamp: <HoverLink url={link} name={title} external inline />
        </div>
      </div>
    </>
  );
};
