import './_header-menu.styles.scss'
import MenuItem from "../menu-item/MenuItem.component";

const HeaderMenu = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <MenuItem name="ABOUT" link="/about"/>
            <MenuItem name="PRODUCTS" link="/products"/>
            <MenuItem.MenuItemImage
                name="Cart"
                link="/cart"
                image="/img/shopping-bag.svg">
                <span className="basket-product-count"> 2  </span>

            </MenuItem.MenuItemImage>
            <MenuItem.MenuItemImage
                name={'Login'}
                link={'/login'}
                image="/img/user.svg"
            />
        </ul>
    )
}

export default HeaderMenu