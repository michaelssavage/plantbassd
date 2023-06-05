import { ReactElement } from "react";
import Link from "next/link";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { BandCamp } from "components/MusicPlayers";

interface MusicReleaseProps {
  title: string;
  children: ReactElement;
  pic: string;
  tags: string;
  link: string;
  titleLink?: string;
  titleLabel?: string;
  standout?: string;
  embed?: string;
}

/**
 * MusicRelease is used in the under the radar series
 */
export const MusicRelease = (props: MusicReleaseProps) => {
  const { title, titleLink, titleLabel, pic, link, standout, tags, embed, children } = props;

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
    <div className="mb-5">
      <div className="row">
        <h3>{renderHeader()}</h3>
        <div className="col-md-5 col-sm-12">
          <Link href={link}>
            <Picture src={pic} alt={title} size={600} />
          </Link>
        </div>
        <div className="col-md-7 col-sm-12">
          {embed && <BandCamp src={embed} />}
          <div className="mt-3 mb-2">{children}</div>
          {standout && (
            <div>
              <b>Standout Track:</b> {standout}
            </div>
          )}
          {tags}
        </div>
      </div>
    </div>
  );
};
