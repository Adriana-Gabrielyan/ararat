import CartItem from 'components/cart-item/CartItem.component';
import Total from 'components/total/Total.component';
import {Link} from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartItems} from "redux/cart/cart.selectors";
const Cart = (props) => {
    const { cartItems } = props;
    return (
        <section className="payment-page ">
            {cartItems.length > 0 ? (
                <div className="d-flex justify-content-between flex-md-row flex-column">
                    <div className="selected-product mb-3">
                        <div className="title">Selected Product</div>
                        {cartItems.map((cartItem) => {
                            return (
                                <CartItem
                                    key={cartItem.id}
                                    {...cartItem}
                                />
                            );
                        })}
                    </div>

                    <div className="subtotal mb-3">
                        <div className="title">Subtotal</div>
                        <Total/>
                    </div>
                </div>
            ) : (
                <h1 className="title-h1 text-center">Your cart is Empty</h1>
            )}

            <Link to="/payment" className="back mt-2">
                Continue Shopping
            </Link>
        </section>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);
