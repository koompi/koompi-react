import gql from "graphql-tag"

const CREATE_USER = gql`
  mutation($fullname: String!, $email: String!, $password: String!) {
    create_user(fullname: $fullname, email: $email, password: $password) {
      fullname
      email
      password
    }
  }
`

const UPDATE_USER = gql`
  mutation(
    $fullname: String!
    $email: String!
    $avatar: String!
    $oldPassword: String
    $newPassword: String
  ) {
    update_user(
      fullname: $fullname
      email: $email
      avatar: $avatar
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      fullname
      email
    }
  }
`

const APPROVE_USER = gql`
  mutation($id: String!, $approve: Boolean!) {
    approve_user(id: $id, approve: $approve) {
      fullname
      email
      approved
    }
  }
`

const ISADMIN = gql`
  mutation($id: String!, $isAdmin: Boolean!) {
    isAdmin(id: $id, isAdmin: $isAdmin) {
      fullname
      email
      isAdmin
    }
  }
`

const DELETE_USER = gql`
  mutation($id: String!) {
    delete_user(id: $id) {
      fullname
    }
  }
`

const CREATE_CATEGORY = gql`
  mutation($title: String!, $slug: String!, $created_by: String!) {
    create_category(title: $title, slug: $slug, created_by: $created_by) {
      id
      title
      slug
      created_by
      created_at
    }
  }
`

const DELETE_CATEGORY = gql`
  mutation($id: String!) {
    delete_category(id: $id) {
      title
    }
  }
`

const UPDATE_CATEGORY = gql`
  mutation(
    $id: String!
    $title: String!
    $slug: String!
    $updated_by: String!
    $updated_at: String!
  ) {
    update_category(
      id: $id
      title: $title
      slug: $slug
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      id
      title
      slug
    }
  }
`

const CREATE_POST = gql`
  mutation(
    $title: String!
    $slug: String!
    $category: String!
    $created_by: String!
    $description: String!
    $thumnail: String
    $tags: [String]!
    $keywords: [String]!
    $meta_desc: String!
  ) {
    create_post(
      title: $title
      slug: $slug
      category: $category
      created_by: $created_by
      description: $description
      thumnail: $thumnail
      tags: $tags
      keywords: $keywords
      meta_desc: $meta_desc
    ) {
      message
    }
  }
`

const DELETE_POST = gql`
  mutation($id: String!) {
    delete_post(id: $id) {
      message
    }
  }
`

const UPDATE_POST = gql`
  mutation(
    $id: String!
    $slug: String!
    $title: String!
    $category: String!
    $description: String!
    $thumnail: String
    $tags: [String]!
    $keywords: [String]!
    $meta_desc: String!
    $updated_by: String!
    $updated_at: String!
  ) {
    update_post(
      id: $id
      title: $title
      slug: $slug
      category: $category
      description: $description
      thumnail: $thumnail
      tags: $tags
      keywords: $keywords
      meta_desc: $meta_desc
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      message
    }
  }
`

const CREATE_PAGE = gql`
  mutation(
    $title: String!
    $lang: String!
    $subTitle: String
    $created_by: String!
    $description: String
    $image: String
    $category: String!
    $sectionNumber: String
    $keywords: [String]!
    $meta_desc: String!
  ) {
    create_page(
      title: $title
      lang: $lang
      subTitle: $subTitle
      created_by: $created_by
      description: $description
      sectionNumber: $sectionNumber
      image: $image
      category: $category
      keywords: $keywords
      meta_desc: $meta_desc
    ) {
      message
    }
  }
`

const DELETE_PAGE = gql`
  mutation($id: String!) {
    delete_page(id: $id) {
      message
    }
  }
`

const UPDATE_PAGE = gql`
  mutation(
    $id: String!
    $title: String!
    $subTitle: String
    $description: String
    $image: String
    $category: String!
    $sectionNumber: String!
    $keywords: [String]!
    $meta_desc: String!
    $updated_by: String!
    $updated_at: String!
  ) {
    update_page(
      id: $id
      title: $title
      subTitle: $subTitle
      description: $description
      image: $image
      category: $category
      sectionNumber: $sectionNumber
      keywords: $keywords
      meta_desc: $meta_desc
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      message
    }
  }
`

const CREATE_MEMBER = gql`
  mutation(
    $fullname: String!
    $department: String!
    $position: String!
    $phoneNumber: String!
    $email: String
    $photo: String!
    $created_by: String!
  ) {
    add_member(
      fullname: $fullname
      department: $department
      position: $position
      phoneNumber: $phoneNumber
      email: $email
      photo: $photo
      created_by: $created_by
    ) {
      message
    }
  }
`

const DELETE_MEMBER = gql`
  mutation($id: String!) {
    delete_member(id: $id) {
      message
    }
  }
`

const UPDATE_MEMBER = gql`
  mutation(
    $id: String!
    $fullname: String!
    $department: String!
    $position: String!
    $phoneNumber: String!
    $email: String
    $photo: String!
    $created_by: String!
  ) {
    update_member(
      id: $id
      fullname: $fullname
      department: $department
      position: $position
      phoneNumber: $phoneNumber
      email: $email
      photo: $photo
      created_by: $created_by
    ) {
      message
    }
  }
`

const CREATE_RETAILER = gql`
  mutation(
    $name: String!
    $location: String!
    $logo: String!
    $phoneNumber: String
    $email: String
    $created_by: String!
  ) {
    add_retailer(
      name: $name
      location: $location
      logo: $logo
      phoneNumber: $phoneNumber
      email: $email
      created_by: $created_by
    ) {
      message
    }
  }
`

const DELETE_RETAILER = gql`
  mutation($id: String!) {
    delete_retailer(id: $id) {
      message
    }
  }
`

const UPDATE_RETAILER = gql`
  mutation(
    $id: String!
    $name: String!
    $location: String!
    $logo: String!
    $phoneNumber: String
    $email: String
  ) {
    update_retailer(
      id: $id
      name: $name
      location: $location
      logo: $logo
      phoneNumber: $phoneNumber
      email: $email
    ) {
      message
    }
  }
`

const CREATE_SOCIAL_MEDIA = gql`
  mutation($name: String!, $link: String!, $logo: String!, $created_by: String!) {
    add_social_media(
      name: $name
      link: $link
      logo: $logo
      created_by: $created_by
    ) {
      message
    }
  }
`

const DELETE_SOCIAL_MEDIA = gql`
  mutation($id: String!) {
    delete_social_media(id: $id) {
      message
    }
  }
`

const UPDATE_SOCIAL_MEDIA = gql`
  mutation($id: String!, $name: String!, $link: String!, $logo: String!) {
    update_social_media(id: $id, name: $name, link: $link, logo: $logo) {
      message
    }
  }
`

const CREATE_LEGAL = gql`
  mutation($title: String!, $description: String!, $created_by: String!) {
    create_legal(title: $title, description: $description, created_by: $created_by) {
      message
    }
  }
`

const UPDATE_LEGAL = gql`
  mutation($id: String!, $title: String!, $description: String!) {
    edit_legal(id: $id, title: $title, description: $description) {
      message
    }
  }
`

const DELETE_LEGAL = gql`
  mutation($id: String!) {
    delete_legal(id: $id) {
      message
    }
  }
`

const ADD_SOFTWARE = gql`
  mutation(
    $title: String!
    $description: String!
    $logo: String!
    $image: String!
    $created_by: String!
  ) {
    create_software(
      title: $title
      description: $description
      logo: $logo
      image: $image
      created_by: $created_by
    ) {
      message
    }
  }
`

const UPDATE_SOFTWARE = gql`
  mutation(
    $id: String!
    $title: String!
    $description: String!
    $logo: String!
    $image: String!
  ) {
    edit_software(
      id: $id
      title: $title
      description: $description
      logo: $logo
      image: $image
    ) {
      message
    }
  }
`

const DELETE_SOFTWARE = gql`
  mutation($id: String!) {
    delete_software(id: $id) {
      message
    }
  }
`

const DELETE_CUSTOMER = gql`
  mutation($id: String!) {
    delete_customer(id: $id) {
      message
    }
  }
`

const ADD_AMA = gql`
  mutation(
    $name: String!
    $title: String!
    $image: String!
    $desc: String!
    $date: String!
    $url: String!
    $category: String!
    $created_by: String!
    $created_at: String!
  ) {
    create_ama(
      name: $name
      title: $title
      image: $image
      desc: $desc
      date: $date
      url: $url
      category: $category
      created_by: $created_by
      created_at: $created_at
    ) {
      message
    }
  }
`

const DELETE_AMA = gql`
  mutation($id: String!) {
    delete_ama(id: $id) {
      message
    }
  }
`

const UPDATE_AMA = gql`
  mutation(
    $id: String!
    $name: String!
    $title: String!
    $image: String!
    $desc: String!
    $date: String!
    $url: String!
    $category: String!
  ) {
    update_ama(
      id: $id
      name: $name
      title: $title
      image: $image
      desc: $desc
      date: $date
      url: $url
      category: $category
    ) {
      message
    }
  }
`

export {
  CREATE_USER,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  APPROVE_USER,
  DELETE_USER,
  ISADMIN,
  CREATE_PAGE,
  DELETE_PAGE,
  UPDATE_PAGE,
  CREATE_MEMBER,
  DELETE_MEMBER,
  UPDATE_MEMBER,
  CREATE_RETAILER,
  DELETE_RETAILER,
  UPDATE_RETAILER,
  CREATE_SOCIAL_MEDIA,
  DELETE_SOCIAL_MEDIA,
  UPDATE_SOCIAL_MEDIA,
  UPDATE_USER,
  CREATE_LEGAL,
  UPDATE_LEGAL,
  DELETE_LEGAL,
  ADD_SOFTWARE,
  UPDATE_SOFTWARE,
  DELETE_SOFTWARE,
  DELETE_CUSTOMER,
  ADD_AMA,
  DELETE_AMA,
  UPDATE_AMA,
}
