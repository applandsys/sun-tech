import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer
                className="footer-section bg-cover"
                style={{ backgroundImage: "url('/assets/img/home-1/footer-bg.jpg')" }}
            >
                <div className="container">
                    <div className="footer-widget-wrapper">
                        <div className="row align-items-xl-end">
                            <div className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp" data-wow-delay=".2s">
                                <div className="footer-widget-items">
                                    <div className="widget-head">
                                        <a href="index.html">
                                            <img src="assets/img/logo/white-logo.svg" alt="img"/>
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <h3 className="title">
                                            Harness the Sun Get Solar Power Today!
                                        </h3>
                                        <a href="contact.html" className="theme-btn">
                                            Contact Us Today
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="footer-widget-items">
                                    <div className="widget-head">
                                        <h3>
                                            Useful Link
                                        </h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="about.html">
                                                <i className="fa-regular fa-chevrons-right"></i> About Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Meet Member
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fa-regular fa-chevrons-right"></i> 24/7 Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Our FAQs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Pricing Plan
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="footer-widget-items">
                                    <div className="widget-head">
                                        <h3>
                                            Our Services
                                        </h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Solar Maintenance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Energy Saving Devices
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Solar Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Renewable Energy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Hybrid Energy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                <i className="fa-regular fa-chevrons-right"></i> Solar PV Systems
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="footer-widget-items footer-contact-form">
                                    <div className="footer-shape">
                                        <img src="assets/img/home-1/footer-shape.png" alt="img"/>
                                    </div>
                                    <div className="footer-shape-2">
                                        <img src="assets/img/home-1/footer-shape-2.png" alt="img"/>
                                    </div>
                                    <div className="icon">
                                        <img src="assets/img/home-1/email.svg" alt="img"/>
                                    </div>
                                    <h3>Sign Up to Our Newsletter</h3>
                                    <p>
                                        Subscribe to our Newsletter and Event right now to be updated
                                    </p>
                                    <form action="#">
                                        <input type="text" placeholder="Your email"/>
                                        <button className="theme-btn" type="submit">
                                            Subscribe Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info-bottom">
                        <div className="info-item wow fadeInUp" data-wow-delay=".2s">
                            <div className="icon">
                                <img src="assets/img/home-1/icon/icon1.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h6>Contact us:</h6>
                                <p>
                                    <a href="tel:+483939993900">+483 9399 939 00</a>
                                </p>
                                <p className="mt-2">
                                    <a href="mailto:info@example.com">helloEcoly@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="info-item wow fadeInUp" data-wow-delay=".4s">
                            <div className="icon">
                                <img src="assets/img/home-1/icon/icon2.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h6>Our Location:</h6>
                                <p>
                                    2220 Plymouth Rd 302, Hopkins, <br/> New York, USA
                                </p>
                            </div>
                        </div>
                        <div className="info-item wow fadeInUp" data-wow-delay=".6s">
                            <div className="icon">
                                <img src="assets/img/home-1/icon/icon3.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h6>Working Time:</h6>
                                <p>
                                    Mon - Fri: 8:00am - 6.00pm <br/>
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                        <div className="social-icon-list wow fadeInUp" data-wow-delay=".8s">
                            <h5>Follow Us:</h5>
                            <div className="social-icon">
                                <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-vimeo-v"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom wow fadeInUp" data-wow-delay=".9s">
                    <div className="container">
                        <p className="text-1">© 2025 Ecoly. All Rights Reserved</p>
                    </div>
                </div>
            </footer>

            <script src="/assets/js/jquery-3.7.1.min.js"></script>
            <script src="/assets/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/js/gsap.min.js"></script>
            <script src="/assets/js/ScrollTrigger.min.js"></script>
            <script src="/assets/js/ScrollSmoother.min.js"></script>
            <script src="/assets/js/ScrollToPlugin.min.js"></script>
            <script src="/assets/js/SplitText.min.js"></script>
            <script src="/assets/js/TextPlugin.js"></script>
            <script src="/assets/js/jquery.nice-select.min.js"></script>
            <script src="/assets/js/jquery.waypoints.js"></script>
            <script src="/assets/js/jquery.counterup.min.js"></script>
            <script src="/assets/js/swiper-bundle.min.js"></script>
            <script src="/assets/js/jquery.meanmenu.min.js"></script>
            <script src="/assets/js/jquery.magnific-popup.min.js"></script>
            <script src="/assets/js/wow.min.js"></script>
            <script src="/assets/js/main.js"></script>
        </>

    );
}