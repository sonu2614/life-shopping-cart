import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clear, remove } from "../Redux/actions/shoppingActions";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const value = useSelector((state) => state);
    let count = 0;

    function removeCart(product) {
        dispatch(remove(product));
    }

    function clearCart() {
        dispatch(clear());
        alert("your items have been checkout out.");
        setTimeout(() => {
            navigate("/");
        });
    }

    return (
        <div>
            <div className="container">
                <h1 className="items">My Cart</h1>
                {value.length === 0 ? (
                    <h2
                        style={{
                            textAlign: "center",
                            marginTop: "100px",
                        }}>
                        Your Cart is Empty. <br />
                        please buy something...
                    </h2>
                ) : (
                    ""
                )}
                <div className="cartContainer">
                    <div className="left">
                        {value.length !== 0
                            ? value.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="card"
                                        style={{ width: "22%" }}>
                                        <div className="image">
                                            <img
                                                src={product.images[0]}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <p>Title: {product.title}</p>
                                            <p>Price : ${product.price}</p>
                                        </div>
                                        <button
                                            className="remove"
                                            onClick={() =>
                                                removeCart(product)
                                            }>
                                            Remove from Cart
                                        </button>
                                    </div>
                                );
                            })
                            : ""}
                    </div>

                    {/* total portion */}
                    {value.length !== 0 ? (
                        <div className="right">
                            <div className="checkList">
                                <p>Checkout List</p>
                            </div>

                            <div className="cartItems">
                                {value.map((product) => {
                                    return (
                                        <div key={product.id}>
                                            <p>1. {product.title}</p>
                                            <p>${product.price}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="totalPrice">
                                <h3>Total:</h3>
                                {value.forEach((product) => {
                                    count += product.price;
                                })}
                                <h4>${count}</h4>
                            </div>

                            <button onClick={clearCart}>
                                Click to Checkout
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
