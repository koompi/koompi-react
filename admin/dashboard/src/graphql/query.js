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

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      title
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`;

const EDIT_CATEGORY = gql`
  query($id: String!) {
    category(id: $id) {
      id
      title
      created_by
    }
  }
`;

export { GET_USERS, GET_CATEGORIES, EDIT_CATEGORY };
