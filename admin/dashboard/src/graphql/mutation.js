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

const CREATE_CATEGORY = gql`
  mutation($title: String!, $created_by: String!) {
    create_category(title: $title, created_by: $created_by) {
      id
      title
      created_by
      created_at
    }
  }
`;

const DELETE_CATEGORY = gql`
  mutation($id: String!) {
    delete_category(id: $id) {
      title
    }
  }
`;

const UPDATE_CATEGORY = gql`
  mutation(
    $id: String!
    $title: String!
    $updated_by: String!
    $updated_at: String!
  ) {
    update_category(
      id: $id
      title: $title
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      id
      title
    }
  }
`;

export { CREATE_USER, CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY };
