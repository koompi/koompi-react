import gql from "graphql-tag"

const CREATE_CUSTOMER = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $phone: String!
    $products: String!
  ) {
    create_customer(
      firstname: $firstname
      lastname: $lastname
      email: $email
      phone: $phone
      products: $products
    ) {
      firstname
    }
  }
`

export { CREATE_CUSTOMER }
