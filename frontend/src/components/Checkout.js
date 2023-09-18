// Checkout.js
import React from 'react';
import styles from '../css/Checkout.css';

const Checkout = () => {
    return (    
        <form className="formContainer">

            <div>
                <label className="label" htmlFor="email">Enter your email:</label>
                <input className="input" type="email" id="email" name="email" required placeholder="Enter your email address" />
            </div>

            {/* Multiple Payment Options */}
            <div>
                <label className="label">Choose a payment method:</label>
                <select className="input">
                    <option>Credit/Debit card</option>
                    <option>PayPal</option>
                    <option>Stripe</option>
                    <option>Apple Pay</option>
                    <option>Google Pay</option>
                </select>
            </div>

            
            {/* Discounts & Coupons */}
            <div>
                <label className="label" htmlFor="coupon">Enter discount or coupon code:</label>
                <input className="input" type="text" id="coupon" name="coupon" placeholder="Enter code" />
            </div>

            {/* FAQs & Support */}
            <div className="supportLinks">
                <a href="/faq">FAQs</a>
                <a href="/chatbot">Chat Support</a>
                <a href="/contact">Contact Us</a>
            </div>

            {/* Terms & Conditions and Privacy Policy */}
            <div className="policies">
                <a href="/terms">Terms & Conditions</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/returns">Return Policy</a>
            </div>

            <button className="button" type="submit">Finalise Purchase</button>

        </form>
    );
}

export default Checkout;


 

