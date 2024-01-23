import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import {getProduct} from "../../actions/productAction.js";
import {userSelector,useDispatch} from "react-redux";
import { useEffect } from "react";



const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "$300",
    _id: "Ayush",
};

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProduct());
    }, [dispatch]);

    return <Fragment>

        <MetaData title="ECommerce" />

        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />

            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
        </div>
    </Fragment>;
};

export default Home;