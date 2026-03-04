"use client";

import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section className="breadcrumb-wrapper bg-cover fix"
                             style={{backgroundImage: "url(assets/img/inner/breadcrumb-image.jpg)"}}>
                        <div className="container">
                            <div className="page-heading">
                                <ul className="breadcrumb-list">
                                    <li>Home</li>
                                    <li>//</li>
                                    <li>Contact Us</li>
                                </ul>
                                <h1 className="breadcrumb-title">Contact Us</h1>
                            </div>
                        </div>
                    </section>


                    <section className="contact-section fix section-padding">
                        <div className="container container-2">
                            <div className="contact-top">
                                <h2 className="hero_title tv_hero_title hero_title_1">
                                    Our Contact Information
                                </h2>
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div className="content">
                                                <p>Call Us 7/24</p>
                                                <h5><a href="tel:+2085550112">+208-555-0112</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <p>Location</p>
                                                <h5>Elgin St. Celina, NY 10299</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon-box-items">
                                            <div className="icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="content">
                                                <p>Make a Quote</p>
                                                <h5>
                                                    <a href="mailto:kidscholl@gmail.com"
                                                       className="link">kidscholl@gmail.com</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-middle-items">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <form onSubmit={handleSubmit} className="contact-form-box">
                                            <h3 className="hero_title tv_hero_title hero_title_1">Get In Touch</h3>
                                            <div className="row g-4 align-items-center justify-content-center">
                                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                                    <div className="form-clt">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Your Name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                                    <div className="form-clt">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                                    <div className="form-clt">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            placeholder="Phone number"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                                    <div className="form-clt">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            placeholder="Select Subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                                                    <div className="form-clt">
                                                          <textarea
                                                              name="message"
                                                              placeholder="Write a message..."
                                                              value={formData.message}
                                                              onChange={handleChange}
                                                          />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                                    <div className="contact-button">
                                                        <button type="submit" className="theme-btn">
                                                            Submit Now
                                                            <i className="far fa-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="google-map-items">
                                          MAP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <div className="container">
                            <div className="cta-wrapper">
                                <div className="cta-image wow fadeInUp" data-wow-delay=".2s">
                                    <img src="assets/img/home-1/cta-image.png" alt="img"/>
                                </div>
                                <h3 className="text-anim">Power Your Home or Business <br/> with Green Energy</h3>
                                <a href="contact.html" className="theme-btn wow fadeInUp" data-wow-delay=".4s">
                                    Learn More
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </section>

                    <footer className="footer-section bg-cover"
                            style={{backgroundImage: "url(/assets/img/inner/breadcrumb-image.jpg)"}}>
                        <div className="container">
                            <div className="footer-widget-wrapper">
                                <div className="row align-items-xl-end">
                                    <div className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="footer-widget-items">
                                            <div className="widget-head">
                                                <a href="/">
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
                                    <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
                                         data-wow-delay=".4s">
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
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                         data-wow-delay=".6s">
                                        <div className="footer-widget-items">
                                            <div className="widget-head">
                                                <h3>
                                                    Our Services
                                                </h3>
                                            </div>
                                            <ul className="list-area">
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Solar
                                                        Maintenance
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Energy Saving
                                                        Devices
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Solar Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Renewable
                                                        Energy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Hybrid Energy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">
                                                        <i className="fa-regular fa-chevrons-right"></i> Solar PV
                                                        Systems
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
                </div>
            </div>
        </>
    );
}