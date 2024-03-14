import { getCldImageUrl } from "next-cloudinary";
import Head from "next/head";

interface TitleProps {
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

export default function PageMetaData({ title, description, imageUrl, url }: TitleProps) {
  let cloudImage: string = "";

  if (imageUrl) {
    cloudImage = getCldImageUrl({
      width: 960,
      height: 600,
      src: imageUrl,
    });
  }

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={description} />
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {url && <meta property="og:url" content={`${url}`} />}
      {imageUrl && <meta name="og:image" content={cloudImage} />}
    </Head>
  );
}
