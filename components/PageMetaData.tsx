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
      {url && <meta property="og:url" content={`${url}`} />}
      {imageUrl && (
        <meta
          name="og:image"
          content={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_600/f_auto/q_auto/v1/${imageUrl}`}
        />
      )}
    </Head>
  );
}
