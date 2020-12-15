import FormInput from "components/form-input/FormInput.component";
import CheckBox from "components/checkbox/Checkbox.component";
import Button from "components/button/Button.component";
import Select from "components/select/Select.component";
import {Link} from "react-router-dom";
import Total from "components/total/Total.component";
import SelectedProduct from "components/selected-product/SelectedProduct.component";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "redux/cart/cart.selectors";
import {connect} from "react-redux";

import PaymentForm from "components/payment-form/PaymentForm.component";
import {useState} from "react";

const Payment = (props) => {
    const {cartItems} = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm = () =>{
        setIsSubmitted(true)
    }
    console.log(isSubmitted);
    return (
        <section className="shipping-page d-flex align-items-start justify-content-between flex-wrap">
            {!isSubmitted ? (
                <>
                    <PaymentForm submitForm={submitForm}/>
                    <div className="right-side">
                        <div className="title">Subtotal</div>
                        <Total cartItems={cartItems} className="subtotal"/>
                        <div className="title">Selected Product</div>
                        <SelectedProduct/>
                    </div>
                </>
            ) : (
                <h1 className="title-h1">Thank You</h1>
            )}
        </section>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Payment);
