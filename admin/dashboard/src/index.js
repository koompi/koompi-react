import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { ApolloProvider } from "@apollo/react-hooks"
import Cookies from "js-cookie"

import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"

// const httpLink = createHttpLink({
//   uri: "http://localhost:7006/admin",
// })

const httpLink = createHttpLink({
  uri: "https://admin.koompi.com/admin",
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get("token")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   cache,
//   uri: "http://localhost:8080/admin",
//   credentials: "same-origin",
//   headers: {
//     authorization: token
//   }
// })

// const client = new ApolloClient({
//   cache,
//   uri: "http://localhost:8080/admin"
// })

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
