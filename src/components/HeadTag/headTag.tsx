import { FC } from "react";
import Head from "next/head";

const HeadTag: FC = () => {
  return (
    <Head>
      <title>Find Jobs</title>
      <meta name="description" content="find jobs" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadTag;
