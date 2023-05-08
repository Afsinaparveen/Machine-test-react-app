import React from "react";
import bannerImg from "../../images/banner-image.png";
import icon1 from "../../images/icon.png";
import icon2 from "../../images/search.png";
import logo from "../../images/logo.png";

function banner() {
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    function toggleClass(elem, className) {
        console.log(elem, className);
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0) {
                newClass = newClass.replace(" " + className + " ", " ");
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    // theToggle.onclick = function () {
    //     toggleClass(this, 'on');
    // return false;
    // }
    return (
        <>
            <div class="body-main">
                <div class="container">
                    <div class="banner-section">
                        <div class="banner-left">
                            <nav>
                                <div class="menu-div">
                                    <div class="menu-toggle">
                                        <a href="#menu" id="toggle"><span></span></a>
                                        <h5>Menu</h5>
                                    </div>
                                </div>
                                <div class="icons">
                                    <div class="icon1">
                                        <img src={icon1} />
                                        <h5>Our store</h5>
                                    </div>
                                    <div class="icon-2">
                                        <img src={icon2} />
                                        <h5>Search</h5>
                                    </div>
                                </div>
                            </nav>
                            <div class="logo">
                                <img src={logo} />
                            </div>
                            <div class="nav-2">
                                <ul class="drop-down closed">
                                    <li><a href="#" class="nav-button">Gold Price</a></li>
                                    <h6>Updated | 07.02.2020</h6>
                                </ul>
                            </div>
                        </div>
                        <div class="banner-right">
                            <img src={bannerImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default banner;