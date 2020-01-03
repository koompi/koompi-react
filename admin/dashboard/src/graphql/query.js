import gql from "graphql-tag";

const GET_USERS = gql`
  query {
    users {
      fullname
      email
      avatar
      isAdmin
      id
      approved
    }
  }
`;

export { GET_USERS };
