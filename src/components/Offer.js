"use client";

export default function Offer() {
    return (
        <section className="offer-section pt-0 section-padding fix bg-cover"
                 style={{backgroundImage: "url(assets/img/home-1/offer/offer-bg.jpg)"}}>
            <div className="offer-shape-1 float-bob-x">
                <img src="assets/img/home-1/offer/shape-1.png" alt="img"/>
            </div>
            <div className="circle-box">
                <div className="text-image">
                    <img src="assets/img/home-1/choose/text-2.png" alt="img"/>
                </div>
                <a href="contact.html" className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="mycustom-marque section-padding pb-0">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="house-image">
                    <img src="assets/img/home-1/offer/bottom-shape.png" alt="img"/>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="offer-box-items">
                            <div className="offer-content">
                                <span>FEXIBLE PAYMENT</span>
                                <h3>Get Expert Guidence</h3>
                                <p>Resalable energy solution</p>
                                <a href="contact.html" className="theme-btn">
                                    View Offer
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="offer-image">
                                <img src="assets/img/home-1/offer/offer-01.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="offer-box-items">
                            <div className="offer-content">
                                <span>GREENER PLANNET</span>
                                <h3>Saves The Nature</h3>
                                <p>Resalable energy solution</p>
                                <a href="contact.html" className="theme-btn">
                                    View Offer
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="offer-image">
                                <img src="assets/img/home-1/offer/offer-02.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}