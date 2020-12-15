import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";
import { connect } from "react-redux";

const SelectedProduct = (props) => {
    const { cartItems } = props;
    return cartItems.map((product) => (
        <div className="selected d-flex" key={product.id}>
            <div className="image">
                <img src={product.image} alt="" className="img-fluid" />
            </div>

            <div className="text">
                <img src={product.logo} alt="" className="img-fluid" />
                <div>
                    {product.price} (x{product.quantity})
                </div>
            </div>
        </div>
    ));
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
export default connect(mapStateToProps)(SelectedProduct);
