import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from "../app/cartSlice";
import "./Product.css";


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

 return (
  <div className="cart-container">
    <div className="cart-title">Shopping Cart</div>

    <div className="products-grid">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>

{/* cart section  */}
    <div className="cart-section">
      <h3>Cart Items</h3>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <div className="total">
        Total Price: ₹{totalPrice}
      </div>

      <button
        className="clear-btn"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  </div>
);
}

export default Products;