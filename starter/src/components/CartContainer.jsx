import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
    const {cartItems,total} = useSelector((state) => state.cart);
    if (cartItems.amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="emty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} {...item}/>
                )) }
                
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <div className="btn clear-btn">clear cart</div>
            </footer>
        </section>
    );
};

export default CartContainer;