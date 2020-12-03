import React from 'react';
import Price from '../price/Price.component';
import Button from '../button/Button.component';
import {Link} from "react-router-dom"

const ProductSliderItem = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div
                className="slider-div d-block text-decoration-none">
                <Link to={`/product/${props.id}`}><img src={props.image} alt="" className="bottle-img"/></Link>
                <div className="remove-on-hover">
                    <img src={props.logo} alt="" className="logo"/>
                    <Price className={'justify-content-center'} price={props.price}/>
                </div>
                <Button>
                    ADD TO CART
                </Button>
            </div>
        </div>
    );
};

export default ProductSliderItem;
