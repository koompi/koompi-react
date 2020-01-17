import React, { useContext } from "react";
import products from "./data/products";
import Cart from "./buypage/cart";
import { CartContext } from "../CartContext";
import Navbar from "./Navbar";

export default function Store() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <Navbar />
      <div className="container">
        {products.map(product => (
          <div>
            <div>{product.name}</div>
            <div>
              <button onClick={() => cartCtx.addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
