import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "@apollo/react-hooks"
const cache = new InMemoryCache()

// const client = new ApolloClient({
//   cache,
//   uri: "https://admin.koompi.com/admin"
// });

const client = new ApolloClient({
  cache,
  uri: "http://localhost:8080/admin"
})

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
