import { ReactElement } from "react";
import { Picture } from "components/Picture";
import styles from "./Layout.module.scss";

interface ImageAndDescriptionDescProps {
  pic: string;
  picText: string;
  children: ReactElement;
  reverse?: boolean;
}

/**
 * ImageAndDescription is used in the festival series
 */
export const ImageAndDescription = (props: ImageAndDescriptionDescProps) => {
  const { pic, picText, reverse, children } = props;

  return (
    <div className={styles.ImageDescContainer}>
      <div className="row">
        {reverse ? (
          <>
            <div className="col-md-7 col-sm-12">
              <div>{children}</div>
            </div>
            <div className="col-md-5 col-sm-12">
              <Picture src={pic} alt={picText} size={1200} />
              <p className="my-0 text-center">{picText}</p>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-5 col-sm-12">
              <Picture src={pic} alt={picText} size={1200} />
              <p className="my-0 text-center">{picText}</p>
            </div>
            <div className="col-md-7 col-sm-12">
              <div>{children}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
