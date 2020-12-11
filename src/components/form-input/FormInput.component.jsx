import classNames from "classnames";

const FormInput = ({variant, ...props}) => {
    const inputClasses = classNames({
        "shipping-input": variant !== 'login',
        "login-input": variant === 'login'
    })
    return <input {...props} className={props.className + " " + inputClasses}/>;
};

export default FormInput;
