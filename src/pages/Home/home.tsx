import { FC } from "react";

import { HeadTag, SearchInput } from "@components/index";

import { Navbar, JobCard } from "@layouts/index";

import { homeHook } from "./home.hook";

import { IHomeProps } from "./home.d";

const HomePage: FC<IHomeProps> = ({ props }) => {
  const { isLoading, jobsData } = homeHook();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <HeadTag
        props={{
          title: "Home | FindJobs",
        }}
      />

      <main className="min-h-screen w-full bg-primary overflow-hidden overflow-y-scroll">
        <div>
          <Navbar />
        </div>

        <div className="w-full px-[15px] md:px-0 flex items-center justify-center mt-14">
          <SearchInput
            props={{
              redirect: true,
            }}
          />
        </div>

        <div className="px-[15px] md:px-0 flex flex-row flex-wrap justify-center mt-20">
          {jobsData?.map((item, i) => {
            return <JobCard key={i} props={item} />;
          })}
        </div>

        <div className="h-72 w-full"></div>
      </main>
    </div>
  );
};

export default HomePage;
