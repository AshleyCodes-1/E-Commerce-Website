import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div class="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playStore" />
                <img src={appStore} alt="appStore" />
            </div>

            <div class="midFooter">
                <h1>ECOMMERCE.</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2023 &copy; Ashley</p>
            </div>

            <div class="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/milotic_ash/">Instagram</a>
                <a href="https://github.com/AshleyCodes-1">Github</a>
            </div>
        </footer>
    );
};

export default Footer;