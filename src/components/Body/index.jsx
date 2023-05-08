import React from "react";
import gold from "../../images/gold.png";
import section1 from "../../images/section1.png";
import bhima from "../../images/bhima.png";
import bis from "../../images/bis.png";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import ring from "../../images/ring.png";
import bag from "../../images/bag.png";
import bangle from "../../images/bangle.png";
import necklace from "../../images/necklace.png";
import fullimage from "../../images/fullimage.png";
function body() {
    return (
        <>
            <div class="body-main">
                <div class="section-1">
                    <div class="container">
                        <div class="parts">
                            <div class="parts-inner">
                                <img class="gold" src={gold} />
                            </div>
                            <div class="parts-inner">
                                <div class="swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="part-contents">
                                                <h3>Bridal Collection</h3>
                                                <h2>Pavithra Vivaha</h2>
                                                <p>From the purest gold and diamond jewellers</p>
                                                <button class="button-section1">View Collection</button>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="part-contents">
                                                <h3>Bridal Collection</h3>
                                                <h2>Pavithra Vivaha</h2>
                                                <p>From the purest gold and diamond jewellers</p>
                                                <button class="button-section1">View Collection</button>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="part-contents">
                                                <h3>Bridal Collection</h3>
                                                <h2>Pavithra Vivaha</h2>
                                                <p>From the purest gold and diamond jewellers</p>
                                                <button class="button-section1">View Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-arrow">
                                        <div class="button-prev">
                                            <img class="center" src="../Afsina parveen-machine test/images/up-arrow.svg"
                                                alt="image" width="14" height="20" />
                                        </div>
                                        <div class="button-next">
                                            <img class="center" src="../Afsina parveen-machine test/images/downarrow.svg"
                                                alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="parts-inner">
                                <div class="part-last"><img class="center"
                                    src={section1} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-sub">
                    <div class="section-2">
                        <div class="section2-left">
                            <div class="info">
                                <div class="informations">
                                    <h2>About Bhima Jewellers</h2>
                                    <div class="main-info">
                                        <p>Bhima’s journey began in 1925, and has an outstanding heritage of precious metal
                                            expertise.
                                            Our
                                            experience along with creativity is converted into innovation— secret behind the
                                            Bhima
                                            jewellery
                                            charm. With unique designs and awe-inspiring craftsmanship, it is our passion to
                                            amaze
                                            you
                                            each
                                            time you visit our store. Thanks to your trust, loyalty, and love, we continue to be
                                            one
                                            of
                                            the
                                            leading jewellers in the country.</p>
                                        <img src={bhima} />
                                    </div>
                                    <button class="more">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="section2-right">
                            <div class="bis">
                                <img class="gold" src={bis} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="section3">
                        <div class="collections">
                            <div class="collection1">
                                <img src={slide3} />
                            </div>
                            <div class="collection1">
                                <img src={slide2} />
                            </div>
                            <div class="collection1">
                                <img src={slide1} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-sub">
                    <div class="section-4">
                        <div class="other-collections">
                            <div class="other-collection-one">
                                <img src={ring} />
                                <h2>Platinum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <button class="button-section1">View Collection</button>
                            </div>
                            <div class="other-collection-one">
                                <img src={bag} />
                                <h2>Gemstone</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <button class="button-section1">View Collection</button>


                            </div>
                            <div class="other-collection-one">
                                <img src={bangle} />
                                <h2>Traditional</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <button class="button-section1">View Collection</button>
                            </div>
                            <div class="other-collection-one">
                                <img src={necklace} />
                                <h2>Antique</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <button class="button-section1">View Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-sub">
                    <div class="fullimage">
                        <img src={fullimage} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default body;