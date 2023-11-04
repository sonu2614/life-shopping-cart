import React from "react";
import { useDispatch } from "react-redux";
import Products from "../Data/Data";
import { add } from "../Redux/actions/shoppingActions";
import { connect } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    // const value = useSelector((state) => state);

    // console.log("Home");

    function cartPage(product) {
        console.log("cartPage");
        // console.log(product);
        // if (!value.includes(product)) {
        //     dispatch(add(product));
        // }
        dispatch(add(product));
    }

    return (
        <div>
            <div className="container">
                <h1 className="items">All Items</h1>
                <div className="homeContainer">
                    {Products.map((product) => {
                        return (
                            <div key={product.id} className="card">
                                <div className="image">
                                    <img src={product.images[0]} alt="" />
                                </div>
                                <div className="content">
                                    <p>Title: {product.title}</p>
                                    <p>Price : ${product.price}</p>
                                </div>
                                <button
                                    className="add"
                                    onClick={() => cartPage(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
