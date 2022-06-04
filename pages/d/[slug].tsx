import type { NextPage } from "next";
import { useRouter } from "next/router";

import { DetailsPage } from "@pages/index";

const Details: NextPage = () => {
  const router = useRouter();

  const props = {
    companySlug: router?.query?.companySlug,
    jobSlug: router?.query?.jobSlug,
  };

  return <DetailsPage props={props} />;
};

export default Details;
