import gql from 'graphql-tag';

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
      sectionNumber
      category {
        title
        slug
      }
      updated_at
      updated_by
      created_at
    }
  }
`;

const GET_RETAILERS = gql`
  query {
    retailers {
      id
      name
      logo
      location
    }
  }
`;

const GET_MEMBERS = gql`
  query {
    members {
      id
      photo
      fullname
      position
      department
    }
  }
`;

const GET_LEGALS = gql`
  query {
    legals {
      id
      title
      description
    }
  }
`;

const GET_SOCAIL_MEDIA = gql`
  query {
    socailMedia {
      logo
      link
      name
    }
  }
`;

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      description
      category {
        title
        slug
      }
      meta_desc
      keywords
      tags
      updated_at
      updated_by
      created_at
      thumnail
    }
  }
`;

const GET_POST = gql`
  query($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      description
      category {
        title
        slug
      }
      meta_desc
      keywords
      tags
      updated_at
      updated_by
      created_at
      thumnail
    }
  }
`;

const SEARCH_POST = gql`
  query($query: String!) {
    postSearch(query: $query) {
      id
      title
      category {
        title
        slug
      }
      meta_desc
      keywords
      tags
      updated_at
      updated_by
      created_at
      thumnail
    }
  }
`;

export {
  GET_PAGES,
  GET_RETAILERS,
  GET_MEMBERS,
  GET_SOCAIL_MEDIA,
  GET_POSTS,
  GET_POST,
  SEARCH_POST,
  GET_LEGALS
};
