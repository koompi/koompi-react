import React, { useState } from "react"

export const CartContext = React.createContext(null)

export const CartProvider = (props) => {
  const [items, setItems] = useState([])

  function addToCart(item) {
    setItems(() => {
      return [...items, item]
    })
    // window.localStorage.setItem("KOOMPI", JSON.stringify([...items, item]))
  }

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
