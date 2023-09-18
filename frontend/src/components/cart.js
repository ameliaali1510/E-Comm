
import React from 'react';
import '../css/cart.css';


function Cart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((acc, game) => acc + game.Price, 0);

    return (
        <div className="cart-container">
            {cartItems.map(item => (
                <div className="cart-item" key={item.Name}>
                    <span>{item.Name} - ${item.Price}</span>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
            <div className="total">Total: ${total}</div>
            <a href="/checkout" className="checkout-button">Checkout</a>
        </div>
    );
}

export default Cart;
