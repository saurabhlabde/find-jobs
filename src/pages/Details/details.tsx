import { FC } from "react";

import { HeadTag } from "@components/index";
import { DetailsCard, Navbar } from "@layouts/index";

import JobData from "@data/job.json";

import { IDetailsProps } from "./details.d";

const DetailsPage: FC<IDetailsProps> = ({ props }) => {
  const items = JobData;

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
          <div className="w-2/5">
            <DetailsCard props={items} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsPage;
