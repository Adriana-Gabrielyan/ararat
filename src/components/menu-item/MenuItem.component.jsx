import { Link } from "react-router-dom";
import classNames from "classnames";

const MenuItem = (props) => {
    const { link, name, ...otherProps } = props;
    return (
        <li className="nav-item" {...otherProps}>
            <Link className="nav-link" to={link}>
                {name}
            </Link>
        </li>
    );
};

const MenuItemImage = (props) => {
    const { children, link, onClick, image, name, className } = props;

    const classes = classNames({
        "nav-item item-icon position-relative": true,
        [className]: className,
    });
    return (
        <li className={classes}>
            <Link className="nav-link d-flex align-items-center" to={link} onClick={onClick}>
                <img src={image} alt="" />
                <span> {name}</span>
                {children}
            </Link>
        </li>
    );
};

export default Object.assign(MenuItem, { MenuItemImage });
