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
      <div className="row display-flex align-items-center">
        <div className="col clubGuide">
          <Picture src={pic} alt={title} size={1200} />
        </div>
        <div className="col clubGuide">
          <h2>{title}</h2>
          <div>
            {description}
            <br />
            {standout ? (
              <>
                <br />
                <strong>Standout Track: {standout}</strong>
              </>
            ) : null}
            <br />
            Listen here:{" "}
            <HoverLink
              url={link}
              name={title.length > 60 ? `${title.slice(0, 50)}...` : title}
              external
              inline
            />
          </div>
          <br />
          {tags}
        </div>
      </div>
    </>
  );
};
