import Head from "next/head";

interface TitleProps {
  title: string;
}

export default function PageTitle({ title }: TitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
