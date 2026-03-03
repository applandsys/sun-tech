"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero-section hero-1 fix section-bg">
            {/* Decorative shapes */}
            <div className="hero-shape-1 float-bob-y">
                <Image
                    src="/assets/img/home-1/hero/hero-shape-1.png"
                    alt="img"
                    width={120}
                    height={120}
                    className="w-auto h-auto"
                />
            </div>
            <div className="hero-shape-2 float-bob-y">
                <Image
                    src="/assets/img/home-1/hero/hero-shape-2.png"
                    alt="img"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            </div>
            <div className="hero-ratting">
                <Image
                    src="/assets/img/home-1/hero/rattiing-image.png"
                    alt="img"
                    width={150}
                    height={40}
                    className="w-auto h-auto"
                />
            </div>

            {/* Social icons – horizontal (original theme style) */}
            <div className="social-icon d-grid align-items-center">
                <span className="line"></span>
                <a href="javascript:void(0)">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="javascript:void(0)">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="javascript:void(0)">
                    <i className="fab fa-vimeo-v"></i>
                </a>
                <a href="javascript:void(0)">
                    <i className="fab fa-pinterest-p"></i>
                </a>
                <span>FOLLOW:</span>
            </div>

            <div className="container">
                <div className="row g-4 align-items-center">
                    {/* Left column – text and counters */}
                    <div className="col-lg-6">
                        <div className="hero-content-items">
                            <div className="hero-content">
                                <h6 className="sub-title wow fadeInUp">
                                    <Image
                                        src="/assets/img/sub-title-1.svg"
                                        alt="img"
                                        width={20}
                                        height={20}
                                        className="w-auto h-auto"
                                    />
                                    BEST SOLAR COMPANY IN 2025
                                </h6>
                                <h1 className="text-anim">
                                    Renewable<br />Solar Power<br />Solution
                                </h1>
                                <Link
                                    href="/service"
                                    className="theme-btn wow fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    View Our Services
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                            <div className="counter-items-area">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                                    <h2>
                                        <span className="count">98</span>%
                                    </h2>
                                    <p>
                                        Clients Satisfied and <br /> Repeating
                                    </p>
                                </div>
                                <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                                    <h2>
                                        <span className="count">67</span>+
                                    </h2>
                                    <p>
                                        Projects Completed <br /> in 24 Countries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column – hero image */}
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <Image
                                src="/assets/img/home-1/hero/hero-img.png"
                                alt="img"
                                width={500}
                                height={400}
                                priority
                                className="w-auto h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}