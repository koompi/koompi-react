import gql from "graphql-tag"

const CREATE_PAYMENT = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $phone: String!
    $message: String
    $color: String!
    $payBy: String!
    $product: [String]!
    $price: Float!
  ) {
    create_payment(
      firstname: $firstname
      lastname: $lastname
      email: $email
      phone: $phone
      message: $message
      color: $color
      payBy: $payBy
      product: $product
      price: $price
    ) {
      message
    }
  }
`

export { CREATE_PAYMENT }
