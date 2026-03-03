import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-section bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/footer-bg.jpg')" }}>
            <div className="container">
                <div className="footer-widget-wrapper">
                    <div className="row align-items-xl-end">
                        <div className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp" data-wow-delay=".2s">
                            <div className="footer-widget-items">



                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="assets/img/logo/black-logo.png"
                                            alt="img"

                                        />
                                    </Link>
                                </div>


                                <div className="footer-content">
                                    <h3 className="title">Harness the Sun Get <br/>Solar Power Today!</h3>
                                    <Link href="/contact" className="theme-btn">Contact Us Today <i className="fa-solid fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="footer-widget-items">
                                <div className="widget-head"><h3>Useful Link</h3></div>
                                <ul className="list-area">
                                    <li><Link href="/about"><i className="fa-regular fa-chevrons-right"></i> About Company</Link></li>
                                    <li><Link href="/team"><i className="fa-regular fa-chevrons-right"></i> Meet Member</Link></li>
                                    <li><Link href="/contact"><i className="fa-regular fa-chevrons-right"></i> Contact Us</Link></li>
                                    <li><Link href="/contact"><i className="fa-regular fa-chevrons-right"></i> 24/7 Support</Link></li>
                                    <li><Link href="/faq"><i className="fa-regular fa-chevrons-right"></i> Our FAQs</Link></li>
                                    <li><Link href="/pricing"><i className="fa-regular fa-chevrons-right"></i> Pricing Plan</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="footer-widget-items">
                                <div className="widget-head"><h3>Our Services</h3></div>
                                <ul className="list-area">
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Solar Maintenance</Link></li>
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Energy Saving Devices</Link></li>
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Solar Solutions</Link></li>
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Renewable Energy</Link></li>
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Hybrid Energy</Link></li>
                                    <li><Link href="/service-details"><i className="fa-regular fa-chevrons-right"></i> Solar PV Systems</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info-bottom">
                    <div className="info-item wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon"><img src="/assets/img/home-1/icon/icon1.svg" alt="" /></div>
                        <div className="content">
                            <h6>Contact us:</h6>
                            <p><a href="tel:+483939993900">+483 9399 939 00</a></p>
                            <p className="mt-2"><a href="mailto:info@example.com">helloEcoly@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="info-item wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon"><img src="/assets/img/home-1/icon/icon2.svg" alt="" /></div>
                        <div className="content">
                            <h6>Our Location:</h6>
                            <p>2220 Plymouth Rd 302, Hopkins, <br /> New York, USA</p>
                        </div>
                    </div>
                    <div className="info-item wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon"><img src="/assets/img/home-1/icon/icon3.svg" alt="" /></div>
                        <div className="content">
                            <h6>Working Time:</h6>
                            <p>Mon - Fri: 8:00am - 6.00pm <br /> Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="social-icon-list wow fadeInUp" data-wow-delay=".8s">
                        <h5>Follow Us:</h5>
                        <div className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
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
    );
}