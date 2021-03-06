import MenuItem from "../menu-item/MenuItem.component";
import UserSvg from "assets/icons/user.svg";
import BasketSvg from "assets/icons/shopping-bag.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount } from "redux/cart/cart.selectors";

const HeaderMenu = (props) => {
    const { setDefaultPageState, cartItemsCount, cartItems } = props;

    return (
        <ul className="header-menu navbar-nav">
            <MenuItem
                name="ABOUT"
                link="/about"
                onClick={setDefaultPageState.bind(this, { title: "Narek", text: "Sargsyan" })}
            />
            <MenuItem name="PRODUCTS" link="/products" />
            <MenuItem.MenuItemImage name="Cart" link="/cart" image={BasketSvg}>
                {cartItems.length ? <span className="basket-product-count">{cartItemsCount}</span> : ""}
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
