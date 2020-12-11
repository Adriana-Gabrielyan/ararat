import React from "react";
import Price from "../price/Price.component";
import Button from "../button/Button.component";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {addItemToCart} from "redux/cart/cart.actions";


const ProductSliderItem = (props) => {
    const {id, image, logo, price, addItemToCart} = props
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addItemToCart(props);
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="slider-div d-block text-decoration-none">
                <Link to={`/product/${id}`}>
                    <img src={image} alt="" className="bottle-img"/>
                </Link>
                <div className="remove-on-hover">
                    <img src={logo} alt="" className="logo"/>
                    <Price className={"justify-content-center"} price={price}/>
                </div>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addItemToCart,
};

export default connect(null,mapDispatchToProps)(ProductSliderItem);
