import { FC } from "react";

import JobIcon from "@assets/job.svg";

const Navbar: FC = () => {
  return (
    <div>
      <div>
        <JobIcon />
        <div>
          <h1>FindJobs</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
