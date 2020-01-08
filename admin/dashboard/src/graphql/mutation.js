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

const APPROVE_USER = gql`
  mutation($id: String!, $approve: Boolean!) {
    approve_user(id: $id, approve: $approve) {
      fullname
      email
      approved
    }
  }
`;

const ISADMIN = gql`
  mutation($id: String!, $isAdmin: Boolean!) {
    isAdmin(id: $id, isAdmin: $isAdmin) {
      fullname
      email
      isAdmin
    }
  }
`;

const DELETE_USER = gql`
  mutation($id: String!) {
    delete_user(id: $id) {
      fullname
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

const CREATE_POST = gql`
  mutation(
    $title: String!
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
      category: $category
      created_by: $created_by
      description: $description
      thumnail: $thumnail
      tags: $tags
      keywords: $keywords
      meta_desc: $meta_desc
    ) {
      id
      title
      created_by
      created_at
    }
  }
`;

const DELETE_POST = gql`
  mutation($id: String!) {
    delete_post(id: $id) {
      title
    }
  }
`;

const UPDATE_POST = gql`
  mutation(
    $id: String!
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
      category: $category
      description: $description
      thumnail: $thumnail
      tags: $tags
      keywords: $keywords
      meta_desc: $meta_desc
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      id
      title
      created_by
      created_at
    }
  }
`;

const CREATE_PAGE = gql`
  mutation(
    $title: String!
    $subTitle: String
    $created_by: String!
    $description: String!
    $image: String
    $keywords: [String]!
    $meta_desc: String!
  ) {
    create_page(
      title: $title
      subTitle: $subTitle
      created_by: $created_by
      description: $description
      image: $image
      keywords: $keywords
      meta_desc: $meta_desc
    ) {
      id
      title
      created_by
      created_at
    }
  }
`;

const DELETE_PAGE = gql`
  mutation($id: String!) {
    delete_page(id: $id) {
      title
    }
  }
`;

const UPDATE_PAGE = gql`
  mutation(
    $id: String!
    $title: String!
    $subTitle: String
    $description: String!
    $image: String
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
      keywords: $keywords
      meta_desc: $meta_desc
      updated_by: $updated_by
      updated_at: $updated_at
    ) {
      id
      title
      created_at
    }
  }
`;

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
      fullname
      department
      position
      phoneNumber
      email
      photo
      created_by
    }
  }
`;

const DELETE_MEMBER = gql`
  mutation($id: String!) {
    delete_member(id: $id) {
      fullname
    }
  }
`;

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
      fullname
      department
      position
    }
  }
`;

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
      name
      location
      logo
      phoneNumber
      email
      created_by
    }
  }
`;

const DELETE_RETAILER = gql`
  mutation($id: String!) {
    delete_retailer(id: $id) {
      name
    }
  }
`;

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
      name
      location
      logo
      phoneNumber
      email
      created_by
    }
  }
`;

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
  UPDATE_RETAILER
};
