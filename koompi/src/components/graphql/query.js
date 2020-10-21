import gql from "graphql-tag"

const GET_PAGES = gql`
  query($lang: String) {
    pages(lang: $lang) {
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
`

const GET_RETAILERS = gql`
  query {
    retailers {
      id
      name
      logo
      location
    }
  }
`

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
`

const GET_LEGALS = gql`
  query {
    legals {
      id
      title
      description
    }
  }
`

const GET_SOCAIL_MEDIA = gql`
  query($lang: String) {
    socailMedia(lang: $lang) {
      logo
      link
      name
    }
  }
`

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
`

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
`

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
`

const GET_SOFTWARES = gql`
  query {
    softwares {
      id
      title
      description
      logo
      image
      created_by
    }
  }
`

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      purchasingType
    }
  }
`

const GET_AMAS = gql`
  query {
    amas {
      id
      image
      title
      name
      desc
      date
      category
      url
    }
  }
`

export {
  GET_PAGES,
  GET_RETAILERS,
  GET_MEMBERS,
  GET_SOCAIL_MEDIA,
  GET_POSTS,
  GET_POST,
  SEARCH_POST,
  GET_LEGALS,
  GET_SOFTWARES,
  GET_PRODUCTS,
  GET_AMAS,
}
