import MenuItem from "../menu-item/MenuItem.component";
import UserSvg from "assets/icons/user.svg";
import BasketSvg from "assets/icons/shopping-bag.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount } from "redux/cart/cart.selectors";

const HeaderMenu = (props) => {
    const { setDefaultPageState, cartItemsCount, cartItems } = props;
    const quantity = () => {
        let quantity = 0;
        for (let i = 0; i < cartItems.length; i++) {
            quantity += cartItems[i].quantity;
        }
        return quantity;
    };
    return (
        <ul className="header-menu navbar-nav">
            <MenuItem
                name="ABOUT"
                link="/about"
                onClick={setDefaultPageState.bind(this, { title: "Narek", text: "Sargsyan" })}
            />
            <MenuItem name="PRODUCTS" link="/products" />
            <MenuItem.MenuItemImage name="Cart" link="/cart" image={BasketSvg}>
                {[1].map((el) => {
                    return (
                        <span key={el} className="basket-product-count">
                            {quantity()}{" "}
                        </span>
                    );
                })}

                {/*<span className="basket-product-count">{quantity()} </span>*/}
            </MenuItem.MenuItemImage>
            <MenuItem.MenuItemImage name={"Login"} link={"/login"} image={UserSvg} />
        </ul>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(HeaderMenu);
