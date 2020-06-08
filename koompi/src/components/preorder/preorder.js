import React, { useState } from "react"
import { Form } from "antd"

const Product = (props) => {
  const { product, children } = props
  return (
    <div className="products">
      {product.name} ${product.price}
      {children}
    </div>
  )
}

function PreOrder() {
  const [products] = useState([
    { name: "KOOMPI E13", price: 369, quantity: 1 },
    { name: "KOOMPI E11", price: 149, quantity: 1 },
  ])

  const [cart, setCart] = useState([])

  const addToCart = (index) => {
    setCart(cart.concat(products[index]))
  }

  const calculatePrice = () => {
    return cart.reduce((price, product) => price + product.price, 0)
  }

  return (
    <div className="App">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <button onClick={() => addToCart(index)}>Add to cart</button>
        </Product>
      ))}
      YOUR CART TOTAL: ${calculatePrice()}
    </div>
  )
}

export default Form.create()(PreOrder)
