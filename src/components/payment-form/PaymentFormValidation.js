export default function PaymentFormValidation(values) {
    let errors = {};

    if (!values.first_name.trim()) {
        errors.first_name = 'First name is required';
    }

    if (!values.last_name.trim()) {
        errors.last_name = 'Last name is required';
    }

    if (!values.address.trim()) {
        errors.address = 'Address is required';
    }

    if (!values.apartment.trim()) {
        errors.apartment = 'Apartment is required';
    }

    if (!values.postal_code.trim()) {
        errors.postal_code = 'Postal Code is required';
    }

    if (!values.phone.trim()) {
        errors.phone = 'Phone is required';
    }
    if (!values.keep.trim()) {
        errors.keep = 'This filed is required';
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    return errors;
}
