import gql from "graphql-tag"

const CREATE_PAYMENT = gql`
  mutation(
    $fname: String!
    $lname: String!
    $email: String!
    $phoneNumber: String!
    $message: String!
    $product: [String]!
    $price: Float!
  ) {
    create_payment(
      fname: $fname
      lname: $lname
      email: $email
      phoneNumber: $phoneNumber
      message: $message
      product: $product
      price: $price
    ) {
      message
    }
  }
`

export { CREATE_PAYMENT }
