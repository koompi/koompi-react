import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation($fullname: String!, $email: String!, $password: String!) {
    create_user(fullname: $fullname, email: $email, password: $password) {
      fullname
      email
      password
    }
  }
`;

export { CREATE_USER };
