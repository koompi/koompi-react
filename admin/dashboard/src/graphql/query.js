import gql from "graphql-tag"

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
`

const GET_USER = gql`
  query($email: String!) {
    user(email: $email) {
      fullname
      email
      avatar
      isAdmin
      id
      approved
    }
  }
`

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      title
      slug
      created_by
      updated_by
      created_at
      updated_at
    }
  }
`

const EDIT_CATEGORY = gql`
  query($id: String!) {
    category(id: $id) {
      id
      title
      created_by
    }
  }
`

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      slug
      description
      category {
        title
      }
      user {
        fullname
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
  query($id: String!) {
    post(id: $id) {
      id
      title
      slug
      created_by
      description
      category {
        title
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

const GET_PAGES = gql`
  query {
    pages {
      id
      title
      subTitle
      category {
        title
      }
      sectionNumber
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
`

const GET_PAGE = gql`
  query($id: String!) {
    page(id: $id) {
      id
      title
      subTitle
      category {
        title
        slug
      }
      sectionNumber
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
`

const GET_MEMBERS = gql`
  query {
    members {
      id
      fullname
      phoneNumber
      email
      created_by
      position
      photo
      department
      created_at
    }
  }
`

const GET_MEMBER = gql`
  query($id: String!) {
    member(id: $id) {
      id
      fullname
      phoneNumber
      email
      created_by
      position
      photo
      department
      created_at
    }
  }
`

const GET_RETAILERS = gql`
  query {
    retailers {
      name
      id
      email
      logo
      location
      created_by
      phoneNumber
      created_at
    }
  }
`

const GET_RETAILER = gql`
  query($id: String!) {
    retailer(id: $id) {
      name
      id
      email
      logo
      location
      created_by
      phoneNumber
      created_at
    }
  }
`

const GET_SOCIAL_MEDIA = gql`
  query {
    socialMedia {
      id
      name
      logo
      link
      created_by
      created_at
    }
  }
`
const GET_ONE_SOCIAL_MEDIA = gql`
  query($id: String!) {
    oneSocialMedia(id: $id) {
      id
      name
      logo
      link
      created_by
      created_at
    }
  }
`

const GET_LEGALS = gql`
  query {
    legals {
      id
      title
      description
      created_by
      created_at
    }
  }
`

const GET_LEGAL = gql`
  query($id: String!) {
    legal(id: $id) {
      id
      title
      description
      created_by
      created_at
    }
  }
`

const GET_PAYMENTS = gql`
  query {
    payments {
      id
      fname
      lname
      email
      phoneNumber
      message
      product
      cancle
      price
      created_at
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
      created_at
      user {
        fullname
      }
    }
  }
`

const GET_SOFTWARE = gql`
  query($id: String!) {
    software(id: $id) {
      id
      title
      description
      logo
      image
      created_at
      user {
        fullname
      }
    }
  }
`

export {
  GET_USERS,
  GET_USER,
  GET_CATEGORIES,
  EDIT_CATEGORY,
  GET_POSTS,
  GET_POST,
  GET_PAGES,
  GET_PAGE,
  GET_MEMBERS,
  GET_MEMBER,
  GET_RETAILERS,
  GET_RETAILER,
  GET_SOCIAL_MEDIA,
  GET_ONE_SOCIAL_MEDIA,
  GET_LEGALS,
  GET_LEGAL,
  GET_PAYMENTS,
  GET_SOFTWARES,
  GET_SOFTWARE
}
