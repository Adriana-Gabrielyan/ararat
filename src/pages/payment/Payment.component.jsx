import FormInput from "components/form-input/FormInput.component";
import CheckBox from "components/checkbox/Checkbox.component";
import Button from "components/button/Button.component"
import Select from "components/select/Select.component";
import {Link} from "react-router-dom";
import Total from "components/total/Total.component";
import SelectedProduct from "components/selected-product/SelectedProduct.component";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "redux/cart/cart.selectors";
import {connect} from "react-redux";

const Payment = (props) => {
    const country_options = [
        {value: 'sortBy', label: 'Sort By Default'},
        {value: 'lowToHigh', label: 'Price Low to High'},
        {value: 'highToLow', label: 'Price High to Low'},
    ];
    const city_options = [
        {value: 'sortBy', label: 'Sort By Default'},
        {value: 'lowToHigh', label: 'Price Low to High'},
        {value: 'highToLow', label: 'Price High to Low'},
    ];
    const {cartItems} = props;

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
        <section className="shipping-page d-flex align-items-start justify-content-between flex-wrap">
            <div className="left-side">
                <div className="title">Contact Information</div>
                <div className="input-div">
                    <FormInput type="text" placeholder="E-mail" className="w-100"/>
                </div>
                <div className="input-div check-div">
                    <CheckBox id="keep">Keep me up to date an news and exclusive offers</CheckBox>
                </div>
                <div className="title">Shipping address</div>
                <div className="input-div d-flex justify-content-between flex-wrap">
                    <FormInput type="text" placeholder="First name" className="w-48"/>
                    <FormInput type="text" placeholder="Last name" className="w-48"/>
                </div>
                <div className="input-div">
                    <FormInput type="text" placeholder="Address" className="w-100"/>
                </div>
                <div className="input-div">
                    <FormInput type="text" placeholder="Apartment, suite, etc. (optional)"
                               className="w-100"/>
                </div>

                <div className="input-div">
                    <Select options={country_options} className="w-100 shipping-input"/>

                </div>
                <div className="input-div d-flex justify-content-between flex-wrap">
                    <Select options={city_options} className="w-48 shipping-input"/>
                    <FormInput type="number" placeholder="Postal code" className="w-48 mt-0"/>
                </div>
                <div className="input-div">
                    <FormInput type="number" placeholder="Phone" className="w-100"/>
                </div>
                <div className="input-div mt-4">
                    <CheckBox id="save">Save this information for next time </CheckBox>
                </div>
                <div className="text-right mt-5">
                    <Button href="#" className="btn-outline-gold">Continue to shipping method</Button>
                </div>
                <Link to="/cart" className="back mt-4 text-uppercase">return to cart</Link>
            </div>
            <div className="right-side">
                <div className="title">Subtotal</div>
                <Total count={quantity()} total={total()} className="subtotal"/>
                <div className="title">Selected Product</div>
                <SelectedProduct/>
            </div>
        </section>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Payment);