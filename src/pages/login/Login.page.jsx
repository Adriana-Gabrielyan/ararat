import FormInput from 'components/form-input/FormInput.component'
import Button from "components/button/Button.component";
import BackgroundImage from "assets/images/thank-you.png";
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <section className="position-relative register-page">
            <img src={BackgroundImage} alt="" className="w-100 h-100 bg-img" />
            <div className="register-page-content">
                <form className="input-form">
                    <h1 className="text-center">Login</h1>

                    <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                    />
                    <Button
                        className="text-white w-100">
                        Login
                    </Button>
                </form>
                <div className="text-white mt-3 mb-2 text-center">
                    Don't have account{' '}
                    <Link to="/register" className="text-gold">
                        {' '}
                        Register here
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
