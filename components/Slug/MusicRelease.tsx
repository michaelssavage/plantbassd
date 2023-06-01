import { ReactElement } from "react";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

interface MusicReleaseProps {
  title: string;
  children: ReactElement;
  pic: string;
  link: string;
  tags: string;
  titleLink?: string;
  titleLabel?: string;
  standout?: string;
}

/**
 * MusicRelease is used in the under the radar series
 */
export const MusicRelease = (props: MusicReleaseProps) => {
  const { title, titleLink, titleLabel, pic, link, standout, tags, children } = props;

  const renderHeader = () => {
    if (titleLabel && titleLink) {
      return (
        <>
          {title}{" "}
          <HoverLink
            url={titleLink}
            name={titleLabel}
            inline
            inlineCSS={{ marginBottom: "-0.5rem" }}
            external
          />
        </>
      );
    } else if (!titleLabel && titleLink) {
      return (
        <>
          {`${title.split("by")[0]} by`}{" "}
          <HoverLink
            url={titleLink}
            name={title.split("by")[1]}
            inline
            inlineCSS={{ marginBottom: "-0.5rem" }}
            external
          />
        </>
      );
    } else return title;
  };

  return (
    <div className="col-md-6 col-sm-12">
      <div className="row display-flex align-items-center">
        <div className="col-12 py-2">
          <h3>{renderHeader()}</h3>
          <Picture src={pic} alt={title} size={400} />
          <div className="mt-3 mb-2">{children}</div>
          {standout && <strong>Standout Track: {standout}</strong>}
          <div>
            Listen here: <HoverLink url={link} name={title} external inline />
          </div>
          {tags}
        </div>
      </div>
    </div>
  );
};
