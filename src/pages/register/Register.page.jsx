import BackgroundImage from "../../assets/images/thank-you.png";
import FormInput from "../../components/form-input/FormInput.component";
import Button from "../../components/button/Button.component";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="position-relative register-page">
            <img src={BackgroundImage} alt="" className="w-100 h-100 bg-img" />
            <div className="register-page-content">
                <form className="input-form">
                    <h1 className="text-center">Register</h1>

                    <FormInput type="text" name="first_name" placeholder="First Name" id="first_name" />

                    <FormInput type="text" name="last_name" placeholder="Last Name" id="last_name" />

                    <FormInput type="email" name="email" placeholder="Email" id="email" />

                    <FormInput type="password" name="password" placeholder="Password" id="password" />
                    <FormInput
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        id="confirm_password"
                    />
                    <Button className="text-white w-100">Register</Button>
                </form>
                <div className="text-white mt-3 mb-2 text-center">
                    Already have an account?
                    <Link to="/login" className="text-gold">
                        {" "}
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Register;
