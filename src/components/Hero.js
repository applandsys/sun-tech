"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero-section hero-1 fix section-bg">
            <div className="hero-shape-1 float-bob-y">
                <img src="assets/img/home-1/hero/hero-shape-1.png" alt="img"/>
            </div>
            <div className="hero-shape-2 float-bob-y">
                <img src="assets/img/home-1/hero/hero-shape-2.png" alt="img"/>
            </div>
            <div className="hero-ratting">
                <img src="assets/img/home-1/hero/rattiing-image.png" alt="img"/>
            </div>
            <div className="social-icon d-grid align-items-center">
                <span className="line"></span>
                <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-vimeo-v"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-pinterest-p"></i></a>
                <span>FOLLOW:</span>
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content-items">
                            <div className="hero-content">
                                <h6 className="sub-title wow fadeInUp">
                                    <img src="assets/img/sub-title-1.svg" alt="img"/>BEST SOLAR COMPANY IN 2025</h6>
                                <h1 className="text-anim">Renewable Solar Power Solution</h1>
                                <a href="service.html" className="theme-btn wow fadeInUp" data-wow-delay=".2s">
                                    View Our Services
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="counter-items-area">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                                    <h2><span className="count">98</span>%</h2>
                                    <p>Clients Satisfied and <br/> Repeating</p>
                                </div>
                                <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                                    <h2><span className="count">67</span>+</h2>
                                    <p>Projects Completed <br/> in 24 Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <img src="assets/img/home-1/hero/hero-img.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}