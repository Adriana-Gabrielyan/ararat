import Count from "components/count/Count.component";
import Price from "components/price/Price.component";

import { connect } from "react-redux";
import { deleteItemFromCart } from "redux/cart/cart.actions";

const CartItem = ({ item, deleteItem }) => {
    const { image, logo, price, quantity } = item;
    return (
        <div className="selected-product-content mb-4">
            <div className="d-flex flex-wrap">
                <div className="payment-img">
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <div>
                    <img src={logo} alt="" className="logo-img" />
                </div>

                <div className="ml-auto d-flex flex-column">
                    <Count item={item} />
                    <Price price={price} />
                    <div className="text-right mt-auto">
                        <button onClick={() => deleteItem(item)} className="delete bg-transparent border-0">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
