import type { NextPage } from "next";

import { HomePage } from "@pages/index";

import JobsData from "@data/jobs.json";

const Home: NextPage<any> = () => {
  return (
    <HomePage
      props={{
        jobs: [],
      }}
    />
  );
};

export default Home;
