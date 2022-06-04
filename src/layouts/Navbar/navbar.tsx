import { FC } from "react";
import Router from "next/router";

import { JobIcon } from "@assets/index";

const Navbar: FC = () => {
  const redirectHandel = () => {
    return Router.push("/");
  };

  return (
    <div className="flex flex-row h-20 px-10 ">
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={redirectHandel}
      >
        <JobIcon />

        <div className="ml-2 text-xl font-bold">
          <h1 className="text-primary_color">FindJobs</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
