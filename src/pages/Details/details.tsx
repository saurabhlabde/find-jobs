import { FC } from "react";

import { HeadTag } from "@components/index";
import { DetailsCard, Navbar } from "@layouts/index";

import JobData from "@data/job.json";

import { detailsHook } from "./details.hook";

import { IDetailsProps } from "./details.d";

const DetailsPage: FC<IDetailsProps> = ({ props }) => {
  const { isLoading, jobData } = detailsHook();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <HeadTag
        props={{
          title: "Details | FindJobs",
        }}
      />

      <main className="min-h-screen w-full bg-primary overflow-hidden overflow-y-scroll">
        <div>
          <Navbar />
        </div>

        <div className="w-full flex justify-center mt-5">
          <div className="w-full md:w-2/3 lg:w-2/3 xl:w-3/6 2xl:w-1/3 mx-[15px] md:mx-0">
            <DetailsCard props={jobData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsPage;
