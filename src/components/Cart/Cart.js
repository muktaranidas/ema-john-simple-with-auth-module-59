import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4 className="my-6">Order Summary</h4>
      <p className="my-6">Selected Items: {quantity}</p>
      <p className="my-6">Total price: ${total}</p>
      <p className="my-6">Total Shipping: ${shipping}</p>
      <p className="my-6">Tax: {tax}</p>
      <h5 className="my-6">Grand Total: {grandTotal.toFixed(2)}</h5>

      <button className="bg-white text-black p-2 my-6 rounded">
        {" "}
        {children}
      </button>
      <button className="bg-white text-black p-2 rounded" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
