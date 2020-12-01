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

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route exact component={About} path="/about" />
                    <Route exact component={Products} path="/products" />
                    <Route exact component={Login} path="/login" />
                    <Route exact component={Register} path="/register" />
                    <Route exact component={Cart} path="/cart" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
