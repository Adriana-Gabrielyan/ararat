import Price from "components/price/Price.component";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount, selectCartItemsTotal } from "redux/cart/cart.selectors";

const Total = (props) => {
    const { cartItems, cartItemsCount, cartItemsTotal } = props;

    return (
        <div className={`selected-product-content  ${props.className}`}>
            <div className="d-flex justify-content-between">
                <div className="total">Total</div>

                <div className="d-flex flex-column justify-content-end">
                    <Price price={cartItemsTotal} className={"mt-0"} />
                    <div className="text-right product-count mb-5">{cartItemsCount} product</div>
                    <Link to="/payment" className="w-165 mt-auto btn-outline-gold">
                        buy
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount,
    cartItemsTotal: selectCartItemsTotal,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Total);
