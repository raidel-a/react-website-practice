import React from 'react';
import '../styles/Cart.css';

// Mock data for the shopping cart items
const mockCartData = [
  {
    id: 1,
    productName: 'Sample Product 1',
    quantity: 2,
    unitPrice: 15.99,
    total: 31.98,
  },
  {
    id: 2,
    productName: 'Sample Product 2',
    quantity: 1,
    unitPrice: 25.49,
    total: 25.49,
  },
];

function ShoppingCart() {
  // Compute the subtotal, tax, and total
  const subtotal = mockCartData.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1; // Assuming a 10% tax rate for this example
  const total = subtotal + tax;

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>

      <div className="cartItems">
        {mockCartData.map((item) => (
          <div key={item.id} className="cartItem">
            <span className="productName">{item.productName}</span>
            <span className="quantity">Qty: {item.quantity}</span>
            <span className="unitPrice">${item.unitPrice.toFixed(2)}</span>
            <span className="total">${item.total.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="summary">
        <div className="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
        <div className="tax">Tax: ${tax.toFixed(2)}</div>
        <div className="total">Total: ${total.toFixed(2)}</div>
      </div>

      <div className="actions">
        <button>Proceed to Checkout</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
