import { FC, useState } from "react";

import { HeadTag, SearchInput } from "@components/index";

import { Navbar, JobCard } from "@layouts/index";

import JobsData from "@data/jobs.json";

const SearchPage: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const items = JobsData;

  return (
    <div>
      <HeadTag
        props={{
          title: "Search | FindJobs",
        }}
      />

      <main className="min-h-screen w-full bg-primary overflow-hidden overflow-y-scroll">
        <div>
          <Navbar />
        </div>

        <div className="w-full px-[15px] md:px-0 mt-14 flex items-center justify-center">
          <SearchInput
            props={{
              value: searchValue,
              setValue: setSearchValue,
            }}
          />
        </div>

        <div className="mt-20 px-[15px] md:px-0 flex flex-row flex-wrap justify-center">
          {items?.map((item, i) => {
            return <JobCard key={i} props={item} />;
          })}
        </div>

        <div className="h-72 w-full"></div>
      </main>
    </div>
  );
};

export default SearchPage;
