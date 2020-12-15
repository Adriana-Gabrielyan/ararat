import Price from "components/price/Price.component";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";

const Total = (props) => {
    const { cartItems } = props;

    const total = () => {
        let totalPrice = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price * cartItems[i].quantity;
        }
        return totalPrice;
    };

    const quantity = () => {
        let quantity = 0;
        for (let i = 0; i < cartItems.length; i++) {
            quantity += cartItems[i].quantity;
        }
        return quantity;
    };
    return (
        <div className={`selected-product-content  ${props.className}`}>
            <div className="d-flex justify-content-between">
                <div className="total">Total</div>

                <div className="d-flex flex-column justify-content-end">
                    <Price price={total()} className={"mt-0"} />
                    <div className="text-right product-count mb-5">{quantity()} product</div>
                    <Link to="/payment" className="w-165 mt-auto btn-outline-gold">
                        buy
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Total);
