import { connect } from "react-redux";
import { incrimentItemQuantity, decrimentItemQuantity } from "redux/cart/cart.actions";

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
    const { item, incrimentItemQuantity, decrimentItemQuantity } = props;
    console.log(item);

    function incCount() {
        incrimentItemQuantity(item.id);
    }

    function decCount() {
        decrimentItemQuantity(item.id);
    }

    return (
        <div className="count-buttons d-flex align-items-center">
            <button className="sub bg-transparent" type="button" aria-label="sub" onClick={decCount}>
                <span>-</span>
            </button>
            <input type="number" value={1} className="mt-0" name="adults" aria-label="number" readOnly />
            <button className="add bg-transparent" type="button" aria-label="add" onClick={incCount}>
                +
            </button>
        </div>
    );
};
const mapDispatchToProps = {
    incrimentItemQuantity,
    decrimentItemQuantity,
};

export default connect(null, mapDispatchToProps)(Object.assign(Count, { CountSingle }));
