"use client";

import Link from "next/link";

export default function News() {
    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp">
                        <img src="/assets/img/sub-title-1.svg" alt="img" />
                        OUR BLOG & NEWS
                    </h6>
                    <h2 className="text-anim">Latest News & Blog</h2>
                </div>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card">
                            <div className="news-card-image">
                                <img src="/assets/img/home-1/news/news-01.jpg" alt="Solar designing process" />
                                <span className="date-badge">
                                    <i className="fa-regular fa-calendar"></i>09 May, 2025
                                </span>
                            </div>
                            <div className="news-card-content">
                                <div className="news-meta">
                                    <div className="author">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span className="category">LEARNING</span>
                                </div>
                                <h3 className="news-title">
                                    <Link href="/news-details">
                                        Solar designing process from start implementation
                                    </Link>
                                </h3>
                                <p className="news-description">
                                    Ways every day, so that all of us can be part of the changing energy system.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-card">
                            <div className="news-card-image">
                                <img src="/assets/img/home-1/news/news-02.jpg" alt="Solar Design Journey" />
                                <span className="date-badge">
                                    <i className="fa-regular fa-calendar"></i>09 May, 2025
                                </span>
                            </div>
                            <div className="news-card-content">
                                <div className="news-meta">
                                    <div className="author">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span className="category">LEARNING</span>
                                </div>
                                <h3 className="news-title">
                                    <Link href="/news-details">
                                        Solar Design Journey: From Concept to Completion
                                    </Link>
                                </h3>
                                <p className="news-description">
                                    Ways every day, so that all of us can be part of the changing energy system.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-card">
                            <div className="news-card-image">
                                <img src="/assets/img/home-1/news/news-03.jpg" alt="Impact of Solar Energy" />
                                <span className="date-badge">
                                    <i className="fa-regular fa-calendar"></i>09 May, 2025
                                </span>
                            </div>
                            <div className="news-card-content">
                                <div className="news-meta">
                                    <div className="author">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span className="category">LEARNING</span>
                                </div>
                                <h3 className="news-title">
                                    <Link href="/news-details">
                                        Impact of Solar Energy on Reducing Carbon
                                    </Link>
                                </h3>
                                <p className="news-description">
                                    Ways every day, so that all of us can be part of the changing energy system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}