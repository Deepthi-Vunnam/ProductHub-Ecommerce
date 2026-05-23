import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import {
    INC,
    DEC,
    REMOVECART
} from "../Redux/Cart/CartSlice";

import "./Cart.css";

export const Cart = () => {

    let cartData = useSelector(
        state => state.cart
    );

    let dispatch = useDispatch();

    // Total Price

    let totalPrice = cartData.reduce(

        (total, item) =>

            total + (item.price * item.quantity),

        0
    );

    return (

        <div className="cart-container">

            {/* Products Section */}

            <div className="cart-products">

                <h2 className="cart-title">

                    Shopping Cart
                    ({cartData.length} items)

                </h2>

                {
                    cartData.map((item) => (

                        <div
                            key={item.id}
                            className="cart-item"
                        >

                            {/* Left */}

                            <Link
                                to={`/products/${item.id}`}
                                className="cart-left"
                            >

                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />

                            </Link>

                            {/* Center */}

                            <div className="cart-center">

                                <Link
                                    to={`/products/${item.id}`}
                                    className="product-link"
                                >

                                    <h3>{item.title}</h3>

                                </Link>

                                <p className="price">

                                    ₹ {
                                        item.price *
                                        item.quantity
                                    }

                                </p>

                                <p className="delivery">
                                    Free Delivery
                                </p>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        dispatch(
                                            REMOVECART(item.id)
                                        )
                                    }
                                >
                                    REMOVE
                                </button>

                            </div>

                            {/* Right */}

                            <div className="cart-right">

                                <div className="quantity-box">

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                DEC(item.id)
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                INC(item.id)
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

            {/* Price Details */}

            <div className="price-details">

                <div className="price-details-header">
                    <h3>PRICE DETAILS</h3>
                    <span className="price-badge">{cartData.length} items</span>
                </div>

                <div className="price-row">
                    <p>Product total</p>
                    <p>₹ {totalPrice}</p>
                </div>

                <div className="price-row">
                    <p>Delivery charges</p>
                    <p className="free">FREE</p>
                </div>

                <div className="price-row highlight-row">
                    <p>Convenience fee</p>
                    <p className="fee">₹ 0</p>
                </div>

                <div className="total-row">
                    <div>
                        <p>Total Amount</p>
                    </div>
                    <h4>₹ {totalPrice}</h4>
                </div>

                <button className="checkout-button">Proceed to Checkout</button>

            </div>

        </div>
    );
};