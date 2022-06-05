import { gql } from "@apollo/client";

const JOB_FRAGMENT_GQL = gql`
  fragment JobFields on Job {
    id
    title
    slug
    description
    company {
      id
      name
      slug
    }
    locationNames
    tags {
      id
      name
    }
  }
`;

const JOBS_GQL = gql`
${JOB_FRAGMENT_GQL}
  query {
    jobs {
     ...JobFields
    }
  }
`;

export { JOBS_GQL };
