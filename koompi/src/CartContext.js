import React, { useState } from "react"
import Cookies from "js-cookie"

export const CartContext = React.createContext(null)

export const CartProvider = (props) => {
  const [items, setItems] = useState([])

  function itemsWithQuantities(items) {
    return items.reduce((acc, item) => {
      const found = acc.find((_item) => _item.sku === item.sku)
      if (found) {
        found.quantity = found.quantity + 1
      } else {
        acc.push({
          quantity: 1,
          ...item
        })
      }
      return acc
    }, [])
  }

  function addToCart(item) {
    setItems(() => {
      return [...items, item]
    })

    const getCircularReplacer = () => {
      const seen = new WeakSet()
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return
          }
          seen.add(value)
        }
        return value
      }
    }
    Cookies.set(
      "koompi",
      JSON.stringify(itemsWithQuantities([...items, item]), getCircularReplacer()),
      {
        expires: 7
      }
    )
  }

  return (
    <CartContext.Provider
      value={{
        items: itemsWithQuantities(items),
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
