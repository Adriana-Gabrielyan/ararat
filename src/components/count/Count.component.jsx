import { connect } from "react-redux";
import { incrimentItemQuantity, decrimentItemQuantity, addItemToCart } from "redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";

const Count = (props) => {
    const { item, incrimentItemQuantity, decrimentItemQuantity } = props;

    function incCount() {
        incrimentItemQuantity(item.id);
    }

    function decCount() {
        decrimentItemQuantity(item.id);
    }

    return (
        <div className="count d-flex justify-content-end align-items-center position-relative">
            <span>Quantity</span>
            <span className="sub" onClick={decCount}>
                {" "}
            </span>
            <input type="number" value={item.quantity} readOnly />
            <span className="add" onClick={incCount}>
                {" "}
            </span>
        </div>
    );
};

const CountSingle = (props) => {
    const { item, incrimentItemQuantity, decrimentItemQuantity, cartItems, addItemToCart } = props;

    function incCount() {
        incrimentItemQuantity(item.id);
    }

    function decCount() {
        decrimentItemQuantity(item.id);
    }

    const itemFromCart = cartItems.filter((CartItem) => CartItem.id == item.id);
    if (item.id == itemFromCart[0]?.id) {
        item.quantity = itemFromCart[0].quantity;
    } else {
        item.quantity = 1;
        // addItemToCart(item);
    }

    return (
        <div className="count-buttons d-flex align-items-center">
            <button className="sub bg-transparent" type="button" aria-label="sub" onClick={decCount}>
                <span>-</span>
            </button>
            <input
                type="number"
                value={item.quantity}
                className="mt-0"
                name="adults"
                aria-label="number"
                readOnly
            />
            <button className="add bg-transparent" type="button" aria-label="add" onClick={incCount}>
                +
            </button>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
const mapDispatchToProps = {
    incrimentItemQuantity,
    decrimentItemQuantity,
    addItemToCart,
};

const CountSingleWithActions = connect(mapStateToProps, mapDispatchToProps)(CountSingle);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Object.assign(Count, { CountSingle: CountSingleWithActions }));
