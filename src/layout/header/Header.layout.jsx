import { ReactComponent as FaceBooKSVG } from "assets/icons/facebook.svg";
import { ReactComponent as InstagramSVG } from "assets/icons/instagram.svg";
import { ReactComponent as YoutubeSVG } from "assets/icons/youtube.svg";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

import MenuBurger from "components/menu-burger/MenuBurger.component";
import HeaderMenu from "components/header-menu/HeaderMenu.component";

import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-content">
                <Link className="navbar-brand" to="/">
                    <LogoSVG />
                </Link>

                <div className="d-flex flex-column">
                    <div className="top-header">
                        <a href="http://ararat.aist.fun/">
                            <FaceBooKSVG />
                        </a>
                        <a href="http://ararat.aist.fun/">
                            <InstagramSVG />
                        </a>
                        <a href="http://ararat.aist.fun/">
                            <YoutubeSVG />
                        </a>
                    </div>
                    <nav className="navbar navbar-expand-lg my-navbar">
                        <MenuBurger />

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <HeaderMenu setDefaultPageState={props.setDefaultPageState} />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
