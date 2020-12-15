import FormInput from "../form-input/FormInput.component";
import Select from "../select/Select.component";
import Button from "../button/Button.component";
import {Link} from "react-router-dom";
import countryList from "react-select-country-list";
import {useEffect, useState} from "react";
import PaymentFormValidation from "./PaymentFormValidation";
import usePaymentForm from "./usePaymentForm";

const PaymentForm = ({submitForm}) => {
    const [countryOptions, setCountryOptions] = useState();
    const [countryValue, setCountryValue] = useState();
    useEffect(() => {
        const country_options = countryList().getData();
        setCountryOptions(country_options);
    }, []);

    const countryChangeHandler = (e) => {
        const value = e.target.value;
        setCountryValue(value);
    };
    const {handleChange, handleSubmit, values, errors} = usePaymentForm(
        submitForm,
        PaymentFormValidation
    );
    return (
        <form onSubmit={handleSubmit} className="left-side">
            <div className="title">Contact Information</div>
            <div className="input-div">
                <FormInput
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    className="w-100"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-danger small">{errors.email}</p>}
            </div>

            <div className="title">Shipping address</div>
            <div className="input-div d-flex justify-content-between flex-wrap">
                <div className="w-48">
                    <FormInput
                        name="first_name"
                        type="text"
                        placeholder="First name"
                        className="w-100"
                        value={values.first_name}
                        onChange={handleChange}
                    />
                    {errors.first_name && <p className="text-danger small">{errors.first_name}</p>}

                </div>
                <div className="w-48">
                    <FormInput
                        name="last_name"
                        type="text"
                        className="w-100"
                        placeholder="Last name"
                        value={values.last_name}
                        onChange={handleChange}
                    />
                    {errors.last_name && <p className="text-danger small">{errors.last_name}</p>}
                </div>

            </div>
            <div className="input-div">
                <FormInput
                    name="address"
                    type="text"
                    placeholder="Address"
                    className="w-100"
                    value={values.address}
                    onChange={handleChange}
                />
                {errors.address && <p className="text-danger small">{errors.address}</p>}
            </div>
            <div className="input-div">
                <FormInput
                    name="apartment"
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-100"
                    value={values.apartment}
                    onChange={handleChange}
                />
                {errors.apartment && <p className="text-danger small">{errors.apartment}</p>}
            </div>
            <div className="input-div">
                <Select
                    name="country"
                    className="shipping-input w-100"
                    options={countryOptions}
                    value={countryValue}
                    onChange={countryChangeHandler}
                />

            </div>
            <div className="input-div d-flex justify-content-between flex-wrap">
                {/*<Select options={city_options} className="w-48 shipping-input"/>*/}
                <FormInput
                    name="postal_code"
                    type="number"
                    placeholder="Postal code"
                    className="w-100 mt-0"
                    value={values.postal_code}
                    onChange={handleChange}
                />
                {errors.postal_code && <p className="text-danger small">{errors.postal_code}</p>}
            </div>
            <div className="input-div">
                <FormInput
                    name="phone"
                    type="number"
                    placeholder="Phone"
                    className="w-100"
                    value={values.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className="text-danger small">{errors.phone}</p>}
            </div>

            <div className="text-right mt-5">
                <Button type="submit" className="btn-outline-gold">
                    Continue to shipping method
                </Button>
            </div>
            <Link to="/cart" className="back mt-4 text-uppercase">
                return to cart
            </Link>
        </form>
    );
};

export default PaymentForm;
