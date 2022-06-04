import { FC } from "react";

import { HeadTag, SearchInput } from "@components/index";

import { Navbar, JobCard } from "@layouts/index";

import JobsData from "@data/jobs.json";

const HomePage: FC = () => {
  const items = JobsData;

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

        <div className="w-full flex items-center justify-center mt-14">
          <SearchInput
            props={{
              redirect: true,
            }}
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center mt-20">
          {items?.map((item, i) => {
            return <JobCard key={i} props={item} />;
          })}
        </div>

        <div className="h-72 w-full"></div>
      </main>
    </div>
  );
};

export default HomePage;
