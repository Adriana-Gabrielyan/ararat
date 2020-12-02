import MenuItem from "../menu-item/MenuItem.component";
import UserSvg from "assets/icons/user.svg";
import BasketSvg from "assets/icons/shopping-bag.svg"

const HeaderMenu = () => {
    return (
        <ul className="header-menu navbar-nav">
            <MenuItem name="ABOUT" link="/about" />
            <MenuItem name="PRODUCTS" link="/products" />
            <MenuItem.MenuItemImage name="Cart" link="/cart" image={BasketSvg}>
                <span className="basket-product-count"> 2 </span>
            </MenuItem.MenuItemImage>
            <MenuItem.MenuItemImage name={"Login"} link={"/login"} image={UserSvg} />
        </ul>
    );
};

export default HeaderMenu;
