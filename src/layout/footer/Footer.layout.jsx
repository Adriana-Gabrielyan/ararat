import { ReactComponent as FooterLogo } from "assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content d-flex align-items-start justify-content-between flex-wrap flex-sm-row flex-column">
                <div className="footer-logo-block">
                    <Link to="/">
                        <FooterLogo />
                    </Link>
                </div>
                <div className="footer-block">
                    <ul>
                        <li>About Us</li>
                        <li>
                            <a href="#" target="_blank">
                                www.araratbrandy.com
                            </a>
                        </li>
                        <li>
                            <a href="#">Visit Us </a>
                        </li>
                        <li>
                            <a href="#">International quality standard </a>
                        </li>
                        <li>
                            <a href="#"> Nutritional Values </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-block">
                    <ul>
                        <li>Share</li>
                        <li>
                            Please, only share our posts and links to the website with those who are on legal
                            drinking age.
                        </li>
                        <li>
                            <div className="mt-3">
                                <a href="https://www.facebook.com/AraratBrandyWorldwide" target="_blank">
                                    <img src="/img/facebook.svg" alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/araratbrandy/"
                                    target="_blank"
                                    className="d-inline-block ml-2">
                                    <img src="/img/instagram.svg" alt="" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UC7JSvDUalxaB6QiOr69S5ew"
                                    className="d-inline-block ml-2"
                                    target="_blank">
                                    <img src="/img/youtube.svg" alt="" width="20" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright d-flex flex-wrap align-items-center pb-0 justify-content-center justify-content-sm-start">
                <Link to="/terms" className="pr-sm-5 pr-3">
                    Terms and conditions
                </Link>
                <Link to="/privacy-policy" className="pr-sm-5 pr-3">
                    Privacy policy
                </Link>
                <Link to="/return-policy" className="pr-sm-5 pr-3">
                    Return policy
                </Link>
                <Link to="/cookie-policy">Cookie policy</Link>
            </div>

            <div className="footer-copyright footer-text d-flex align-items-center justify-content-between pb-0">
                <div></div>
                <div className="text">ARARAT ENCOURAGES RESPONSIBLE DRINKING</div>
                <div></div>
            </div>

            <div className="footer-copyright d-flex align-items-center justify-content-between flex-wrap">
                <div className="pr-5 coppy">© Yerevan Brandy Company 2020</div>

                <div className="aist-block">
                    <a href="https://aist.global/en" target="_blank">
                        <span>Development by</span> Aist
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
