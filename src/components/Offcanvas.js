import Link from 'next/link';

export default function Offcanvas() {
    return (
        <>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/black-logo.png" alt="logo-img"/>
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <h3 className="offcanvas-title">Hello There!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus quasi sunt eum
                                ducimus. </p>
                            <div className="mobile-menu fix mt-15"></div>
                            <div className="social-icon d-flex align-items-center">
                                <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-youtube"></i></a>
                                <a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a>
                            </div>

                            <div className="offcanvas__contact">
                                <h3>Contact Us</h3>
                                <ul className="contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-phone-plus"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us</p>
                                            <h4><a href="tel:+4903983493999">+49 (03) 9834 939 99</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-envelopes"></i>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h4><a href="mailto:yordomain@gmial.com">yordomain@gmial.com</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="content">
                                            <p>Location</p>
                                            <h4>
                                                Chicago 53755 NY, USA
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="contact.html" className="theme-btn">Get A Quote <i
                                className="fa-solid fa-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
        </>
    );
}