import React from "react";

import { ReactComponent as FaceBooKSVG } from "assets/icons/facebook.svg";
import { ReactComponent as InstagramSVG } from "assets/icons/instagram.svg";
import { ReactComponent as YoutubeSVG } from "assets/icons/youtube.svg";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

import MenuBurger from "components/menu-burger/MenuBurger.component";
import HeaderMenu from "../../components/header-menu/HeaderMenu.component";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="top-header d-flex justify-content-end align-items-center">
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
                    <a className="navbar-brand" href="/" aria-label="home page">
                        <LogoSVG />
                    </a>
                    <MenuBurger />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <HeaderMenu />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
