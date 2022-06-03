import { FC } from "react";

import { HeadTag, SearchInput } from "@components/index";

import { Navbar, JobCard } from "@layouts/index";

const HomePage: FC = () => {
  return (
    <div>
      <HeadTag />

      <main>
        <div>
          <Navbar />
        </div>

        <div>
          <SearchInput />
        </div>
        <div>
          <JobCard />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
