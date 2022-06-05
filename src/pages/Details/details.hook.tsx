import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { JOB_GQL } from "./details.gql";

const detailsHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobData, setJobData] = useState<any>(null);

  const router = useRouter();

  const { loading, error, data } = useQuery(JOB_GQL, {
    variables: {
      jobSlug: router?.query?.jobSlug,
      companySlug: router?.query?.companySlug,
    },
  });

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (data) {
      return setJobData(data?.job);
    }
  }, [data]);

  return {
    isLoading,
    jobData,
  };
};

export { detailsHook };
