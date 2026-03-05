'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function About({data}) {


    return (
        <>
            <section className="about-section section-padding fix pt-0">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="about-image-items-style-1">
                                <div className="section-title mb-0">
                                    <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg"
                                                                                alt="img"/>ABOUT COMPANY</h6>
                                </div>
                                <div className="about-image wow fadeInUp" data-wow-delay=".2s">
                                    <img src="assets/img/home-1/about/about-01.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-content-style-1">
                                <div className="section-title mb-0">
                                    <h2 className="text_invert-2">Discover our journey of delivering eco-friendly solar
                                        power that empowers communities and protects the planet</h2>
                                </div>
                                <div className="list-items">
                                    <ul className="wow fadeInUp" data-wow-delay=".2s">
                                        <li>
                                            <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                            24/7 Customer Support
                                        </li>
                                        <li>
                                            <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                            Lower Energy Costs
                                        </li>
                                    </ul>
                                    <ul className="wow fadeInUp" data-wow-delay=".4s">
                                        <li>
                                            <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                            Expert Team Members
                                        </li>
                                        <li>
                                            <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                            Energy Independence
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom-items">
                                    <div className="icon-box-items wow fadeInUp" data-wow-delay=".6s">
                                        <div className="icon">
                                            <img src="assets/img/home-1/about/icon-1.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h2><span className="count">456</span>K+</h2>
                                            <p>Our design philosophy is more than aesthetics</p>
                                        </div>
                                    </div>
                                    <div className="icon-box-items wow fadeInUp" data-wow-delay=".8s">
                                        <div className="icon">
                                            <img src="assets/img/home-1/about/icon-2.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h2><span className="count">97</span>%</h2>
                                            <p>Customers are served behind the digital marketing</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".9s">
                                    More About Us
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>);
}