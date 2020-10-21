import React, { useState } from "react"
import Cookies from "js-cookie"
// import { GET_PRODUCTS } from "./components/graphql/query"

export const CartContext = React.createContext(null)

export function CartProvider({ children }) {
  const initailData = Cookies.getJSON("kp-store-cache")
  const [state, setState] = useState(initailData === undefined ? [] : initailData)

  let addToCart = (name, qty) => {
    let item_to_push
    switch (name) {
      case "koompi-e11":
        item_to_push = {
          id: "koompie11",
          name: "KOOMPI E11",
          qty: qty,
          price: 178.99,
          deposit: 178.99,
          purchasingType: true,
          image: "https://admin.koompi.com/public/uploads/444(1).png",
        }
        break
      case "koompi-e13":
        item_to_push = {
          id: "koompie13",
          name: "KOOMPI E13",
          deposit: 369,
          purchasingType: false,
          qty: qty,
          price: 369,
          image: "https://admin.koompi.com/public/uploads/GrayBView1.png",
        }
        break
      default:
        break
    }

    if (state === undefined ? [] : state.length === 0) {
      setState([item_to_push])
      Cookies.set("kp-store-cache", JSON.stringify([item_to_push]), {
        expires: 7,
      })
    }
    if (state === undefined ? [] : state.length > 0) {
      let new_state = state
      let found = false
      let found_at_index = 0

      if (new_state === undefined) {
        new_state = []
      }

      for (let i = 0; i < new_state.length; ) {
        if (new_state[i].name === item_to_push.name) {
          found = 1
          found_at_index = i
          break
        }
        i++
      }
      if (found === false) {
        new_state.push(item_to_push)
        Cookies.set("kp-store-cache", JSON.stringify(item_to_push), {
          expires: 7,
        })
      } else {
        // let quantity = parseInt(new_state[found_at_index].qty) + parseInt(qty);
        new_state[found_at_index].qty = parseInt(qty)
      }
      setState([...new_state])
      Cookies.set("kp-store-cache", JSON.stringify(state), {
        expires: 7,
      })
    }
  }
  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
