import gql from "graphql-tag";

const GET_PAGES = gql`
  query {
    pages {
      id
      title
      subTitle
      created_by
      description
      meta_desc
      keywords
      image
      updated_at
      updated_by
      created_at
    }
  }
`;

export { GET_PAGES };
