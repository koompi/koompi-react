import gql from "graphql-tag"

const CREATE_CUSTOMER = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $phone: String!
    $payBy: String!
    $products: String!
  ) {
    create_customer(
      firstname: $firstname
      lastname: $lastname
      email: $email
      phone: $phone
      payBy: $payBy
      products: $products
    ) {
      firstname
    }
  }
`

export { CREATE_CUSTOMER }
