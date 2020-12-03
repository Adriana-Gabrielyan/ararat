import { Route, Switch } from "react-router-dom";

// LAYOUTS
import Header from "layout/header/Header.layout";
import Footer from "layout/footer/Footer.layout";
// PAGES
import Home from "pages/home/Home.page";
import About from "pages/about/About.page";
import Products from "pages/products/Products.page";
import Login from "pages/login/Login.page";
import Register from "pages/register/Register.page";
import Cart from "pages/cart/Cart.page";
import ProductSingle from "pages/product-single/ProductSingle.page";
import WithTopScroll from "../hocs/WithTopScroll.hoc";

const RouteWithTopScroll = WithTopScroll(Route);

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <Switch>
                    <RouteWithTopScroll exact component={Home} path="/" />
                    <RouteWithTopScroll exact component={About} path="/about" />
                    <RouteWithTopScroll exact component={Products} path="/products" />
                    <RouteWithTopScroll exact component={ProductSingle} path="/product/:id" />
                    <RouteWithTopScroll exact component={Login} path="/login" />
                    <RouteWithTopScroll exact component={Register} path="/register" />
                    <RouteWithTopScroll exact component={Cart} path="/cart" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
