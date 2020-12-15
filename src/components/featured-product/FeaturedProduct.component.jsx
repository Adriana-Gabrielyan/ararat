import Price from "components/price/Price.component";
import Button from "components/button/Button.component";
import { connect } from "react-redux";
import { addItemToCart } from "redux/cart/cart.actions";

const FeaturedProduct = (props) => {
    const { addItemToCart, image, logo, price } = props;
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addItemToCart(props);
    };
    return (
        <div className="d-flex position-relative">
            <div className="featured-product-text text-right">
                <img src={image} alt="" className="featured-product-img mb-5" />
                <img src={logo} alt="" />
                <Price price={price} />
                <Button onClick={handleClick}>Add to card</Button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addItemToCart,
};

export default connect(null, mapDispatchToProps)(FeaturedProduct);
