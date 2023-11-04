import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/life-shopping-cart" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
