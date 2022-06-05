import { gql } from "@apollo/client";

const JOB_GQL = gql`
  query Job($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      id
      title
      slug
      remotes {
        id
        name
      }
      company {
        id
        name
      }
      description
      applyUrl
      locationNames
      userEmail
    }
  }
`;

export { JOB_GQL };
