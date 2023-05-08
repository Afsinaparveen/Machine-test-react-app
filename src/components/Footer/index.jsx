import React from "react";
import footer1 from "../../images/footer1.png";
import footer2 from "../../images/footer2.png";
import footer3 from "../../images/footer3.png";
import footer4 from "../../images/footer4.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import snap from "../../images/snap.png";
function footer() {
    return (
        <>
            <div class="body-main">
                <div class="footer">
                    <div class="container-sub">
                        <div class="footer-inner">
                            <div class="row">
                                <div class="footer-col-1">
                                    <h4>Our History</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.</p>
                                    <div class="footer-icons">
                                        <div class="icon-1"><img src={footer1}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={footer2}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={footer3}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={footer4}
                                            alt="image" /></div>
                                    </div>
                                </div>
                                <div class="footer-col-2">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#">Gifting</a></li>
                                        <li><a href="#">Goldtree</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Offers</a></li>
                                    </ul>
                                </div>
                                <div class="footer-col-3">
                                    <h4></h4>
                                    <ul>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">social iniiiatives</a></li>
                                        <li><a href="#">wishlist</a></li>
                                        <li><a href="#">ourstore</a></li>
                                        <li><a href="#">contactus</a></li>
                                    </ul>
                                </div>
                                <div class="footer-col-4">
                                    <h4>Subscribe to our Newsletter</h4>
                                    <div class="text">
                                        <input type="text" name="" value="Enter your email address" />
                                    </div>
                                    <div class="socialmedia">
                                        <div class="icon-1"><img src={facebook}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={twitter}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={instagram}
                                            alt="image" /></div>
                                        <div class="icon-1"><img src={snap} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="link">
                        <div class="container-sub">
                            <div class="link-inside">
                                <div class="link-address">
                                    <p class="copyright">© Bhima Group. All Rights Reserved.</p>
                                </div>
                                <div class="link-address">
                                    <p class="rules">Sitemap | Terms & Conditions | Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default footer;