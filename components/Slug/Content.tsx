import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

interface ContentProps {
  title: string;
  titleLabel?: string;
  titleLink?: string;
  pic: string;
  link: string;
  description: string;
  standout?: string;
  tags: string;
}

export const Content = (props: ContentProps) => {
  const { title, titleLabel, titleLink, pic, link, description, standout, tags } = props;
  return (
    <div className="col-md-6 col-sm-12">
      <div className="row display-flex align-items-center">
        <div className="col-12 py-2">
          <Picture src={pic} alt={title} size={1200} />
        </div>
        <div className="col-12 py-2">
          <h2>
            {title} {titleLabel && <HoverLink url={titleLink} name={titleLabel} external />}
          </h2>
          <div>
            {description}
            <br />
            {standout && (
              <>
                <br />
                <strong>Standout Track: {standout}</strong>
              </>
            )}
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
    </div>
  );
};
