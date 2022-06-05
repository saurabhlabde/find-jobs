import { useState } from "react";
import { useQuery } from "@apollo/client";

import { JOBS_GQL } from "./home.gql";
import { useEffect } from "react";

const homeHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobsData, setJobsData] = useState<Array<any>>([]);

  const { loading, error, data } = useQuery(JOBS_GQL);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (data) {
      return setJobsData(data?.jobs);
    }
  }, [data]);

  return { isLoading, jobsData };
};

export { homeHook };
