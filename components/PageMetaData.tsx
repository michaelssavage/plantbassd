import Head from "next/head";

interface TitleProps {
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

export default function PageMetaData({ title, description, imageUrl, url }: TitleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={description} />
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {imageUrl && <meta property="og:url" content={`${url}`} />}
      {url && (
        <meta
          name="og:image"
          content={`https://res.cloudinary.com/ddscru1gt/image/upload/c_limit,w_600/f_auto/q_auto/v1/${imageUrl}`}
        />
      )}
    </Head>
  );
}
