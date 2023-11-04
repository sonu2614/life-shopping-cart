import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar">
                <div className="left">
                    <h3 onClick={() => navigate("/life-shopping-cart")} className="shoppingLink">
                        Shopping Cart
                    </h3>
                </div>

                <div className="right">
                    <h4 onClick={() => navigate("/life-shopping-cart")} className="homeLink">
                        Home Page
                    </h4>
                    <h4 onClick={() => navigate("/cart")} className="cartLink">
                        Cart Page
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
