import React, { Suspense } from "react"
import "./index.css"
import App from "./App"
import "antd/dist/antd.css"
import * as serviceWorker from "./serviceWorker"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import "./i18n"
import { hydrate, render } from "react-dom"

const client = new ApolloClient({
  uri: "https://admin-demo.koompi.com/api",
})

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  hydrate(
    <Suspense fallback={null}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>,
    rootElement
  )
} else {
  render(
    <Suspense fallback={null}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>,
    rootElement
  )
}

// const client = new ApolloClient({
//   uri: "http://localhost:8080/api",
// })

// ReactDOM.render(
//   <Suspense fallback={null}>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </Suspense>,
//   document.getElementById("root")
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
