import { ReactElement } from "react";
import Link from "next/link";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { BandCamp, SoundCloud } from "components/Players";

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
  soundcloudEmbed?: string;
}

/**
 * MusicRelease is used in the under the radar series
 */
export const MusicRelease = (props: MusicReleaseProps) => {
  const {
    title,
    titleLink,
    titleLabel,
    pic,
    link,
    standout,
    tags,
    embed,
    soundcloudEmbed,
    children,
  } = props;

  const renderHeader = () => {
    if (titleLabel && titleLink) {
      return (
        <>
          {title} <HoverLink url={titleLink} name={titleLabel} external />
        </>
      );
    } else if (!titleLabel && titleLink) {
      return (
        <>
          {`${title.split("by")[0]} by`}{" "}
          <HoverLink url={titleLink} name={title.split("by")[1]} external />
        </>
      );
    } else return title;
  };

  return (
    <div className="mt-2 mb-5">
      <div className="row">
        <h3>{renderHeader()}</h3>
        <div className="col-md-4 col-sm-12">
          <Link href={link}>
            <Picture src={pic} alt={title} size={600} />
          </Link>
        </div>
        <div className="col-md-8 col-sm-12">
          {embed && <BandCamp src={embed} />}
          {soundcloudEmbed && <SoundCloud url={soundcloudEmbed} name={title} height="120px" />}
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
