import PRODUCTS_DATA from "redux/products/products.data";
import Select from "components/select/Select.component";
import Price from "components/price/Price.component";
import Count from "components/count/Count.component";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";

const ProductSingle = ({ match, cartItems }) => {
    const single = PRODUCTS_DATA.find((product) => match.params.id == product.id);

    const { image, logo, price, description, name } = single;
    const cartItem = cartItems.find((cartItem) => cartItem.id == single.id);

    if (single.length === 0) {
        return <h1 className="text-center p-5">No such product</h1>;
    }

    const options = [
        { value: "1", label: "1 liter" },
        { value: "0.5", label: "0.5 liter" },
        { value: "0.7", label: "0.7 liter" },
    ];

    return (
        <section className="product-single">
            <div className="d-flex product-single-content align-items-start flex-md-row flex-column">
                <div className="product-slider d-flex flex-md-row flex-column-reverse">
                    <div className="main-container">
                        <div className="slider slider-main text-center">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h4>{name}</h4>
                    <img src={logo} alt="" className="product-logo" />
                    <Price price={price} />
                    <p className="small-text">*The cost may vary depending on the order quantity</p>
                    <p>Choose the bottle capacity</p>
                    <Select options={options} />
                    <p>Select the quantity</p>
                    <div className="d-flex justify-content-between align-items-end">
                        <Count.CountSingle item={single} />
                        <span className="small-text mb-0">Total Price</span>
                    </div>
                    <h4 className="text-right">
                        <b>{(cartItem?.quantity || 1) * price}</b> AMD
                    </h4>

                    <div className="d-flex justify-content-end mt-4">
                        <Link to="/payment" className="btn-outline-gold w-165 ml-2">
                            buy
                        </Link>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="title">Description</div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(ProductSingle);
