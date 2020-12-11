import Price from "components/price/Price.component";
import Button from "components/button/Button.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToCart } from "redux/cart/cart.actions";


const ProductBox = ({ item, addItemToCart }) => {
    const { id, image, logo, price } = item;

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addItemToCart(item);
    };
    return (
        <Link to={`/product/${id}`} className="product-box">
            <div className="product-img-div">
                <img src={image} alt="" className="product-img img-fluid" />
            </div>

            <img src={logo} alt="" className="img-fluid" />
            <Price price={price} className="justify-content-center" />
            <Button onClick={handleClick}> ADD TO CART</Button>
        </Link>
    );
};
const mapDispatchToProps = {
    addItemToCart,
};

export default connect(null, mapDispatchToProps)(ProductBox);
