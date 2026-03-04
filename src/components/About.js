'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import 'animate.css';

export default function About({data}) {
    useEffect(() => {
        const initWOW = async () => {
            if (typeof window !== 'undefined') {
                const WOW = (await import('wowjs')).default;
                new WOW.WOW({
                    live: true,
                    offset: 0,
                    mobile: true
                }).init();
            }
        };
        initWOW();
    }, []);

    return (
        <>
                <div className="search-popup">
                    <div className="search-popup__overlay search-toggler"></div>
                    <div className="search-popup__content">
                        <form role="search" method="get" className="search-popup__form" action="#">
                            <input type="text" id="search" name="search" placeholder="Search Here..."/>
                            <button type="submit" aria-label="search submit" className="search-btn">
                                <span><i className="fa-regular fa-magnifying-glass"></i></span>
                            </button>
                        </form>
                    </div>
                </div>

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <section
                            className="breadcrumb-wrapper bg-cover fix"
                            style={{ backgroundImage: "url('/assets/img/inner/breadcrumb-image.jpg')" }}
                        >
                            <div className="container">
                                <div className="page-heading">
                                    <ul className="breadcrumb-list">
                                        <li>Home</li>
                                        <li>//</li>
                                        <li>About Us</li>
                                    </ul>

                                    <h1 className="breadcrumb-title">{data?.title}</h1>
                                </div>
                            </div>
                        </section>

                        <section className="about-section section-padding fix">
                            <div className="container">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="about-image-items-style-1">
                                            <div className="section-title mb-0">
                                                <h6 className="sub-title wow fadeInUp"
                                                >
                                                    <Image
                                                        src="assets/img/sub-title-1.svg"
                                                        alt="about"
                                                        width={400}
                                                        height={400}
                                                    />
                                                    ABOUT COMPANY</h6>
                                            </div>
                                            <div className="about-image wow fadeInUp" data-wow-delay=".2s">
                                                <Image
                                                    src="/assets/img/home-1/about/about-01.png"
                                                    alt="about"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="about-content-style-1">
                                            <div className="section-title mb-0">
                                                <h2 className="text_invert-2">Discover our journey of delivering
                                                    eco-friendly solar power that empowers communities and protects the
                                                    planet</h2>
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

                        <div className="brand-section section-padding fix pt-0">
                            <div className="container">
                                <div className="top-text text-center">
                                    <p>We are trusted by brands across all industries</p>
                                </div>
                                <div className="swiper brand-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-01.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-02.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-03.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-04.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-05.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="brand-image text-center">
                                                <img src="assets/img/home-1/brand/brand-06.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="video-section m-0 style-2 fix">
                            <div className="video-wrapper fix">
                                <img dataspeed=".8" src="assets/img/home-3/video-image.jpg" alt="img"/>
                                <div className="video">
                                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                       className="video-popup ripple video-btn">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <section className="about-feature-section-2 section-padding fix">
                            <div className="container">
                                <div className="section-title text-center">
                                    <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg" alt="img"/>ABOUT
                                        COMPANY</h6>
                                    <h2 className="text-anim">Ecoly believes in <br/> sustainable energy practices</h2>
                                </div>
                                <div className="about-feature-wrapper-2 style-2">
                                    <div className="about-shape">
                                        <img src="assets/img/home-2/about/about-shape.png" alt="img"/>
                                    </div>
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-6 order-2 order-lg-1">
                                            <div className="about-feature-image-items-style-2">
                                                <img src="assets/img/home-2/about-feature/about-feature-01.png" alt="img"/>
                                                <div className="circle-image">
                                                    <img src="assets/img/home-2/about-feature/circle-shape.png" alt="img"/>
                                                    <div className="counter-items">
                                                        <h2><span className="count">34</span>k</h2>
                                                        <p>Project Complete</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="about-feature-content-items-style-2">
                                                <div className="about-feature-icon-box mt-0">
                                                    <div className="icon">
                                                        <img src="assets/img/home-2/about-feature/icon-01.svg" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Expert Solar Worker</h4>
                                                        <p>People in more ways every day, so that all of us can be part of
                                                            the changing energy system.</p>
                                                    </div>
                                                </div>
                                                <div className="about-feature-icon-box">
                                                    <div className="icon">
                                                        <img src="assets/img/home-2/about-feature/icon-02.svg" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Expert Installation</h4>
                                                        <p>People in more ways every day, so that all of us can be part of
                                                            the changing energy system.</p>
                                                    </div>
                                                </div>
                                                <div className="about-feature-icon-box">
                                                    <div className="icon">
                                                        <img src="assets/img/home-2/about-feature/icon-03.svg" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Modern Technology</h4>
                                                        <p>People in more ways every day, so that all of us can be part of
                                                            the changing energy system.</p>
                                                    </div>
                                                </div>
                                                <a href="service.html" className="theme-btn">
                                                    View Our Services
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="custom-support-list wow fadeInUp" data-wow-delay=".7s">
                                    <li>
                                        <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                        24/7 Customer Support
                                    </li>
                                    <li>
                                        <img src="assets/img/home-1/about/check-icon.svg" alt="img"/>
                                        Lower Energy Costs
                                    </li>
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
                        </section>

                        <section className="project-section section-padding pt-0 pb-0">
                            <div className="container">
                                <div className="section-title-area">
                                    <div className="section-title">
                                        <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg"
                                                                                    alt="img"/>OUR SUCCESSFULL PROJECT</h6>
                                    </div>
                                    <h2 className="text-anim">View Our Portfolio Of <br/> Solar Success</h2>
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="project-thumb-box-items-style-1">
                                        <img src="assets/img/home-1/project/project-01.jpg" alt="img"/>
                                        <div className="project-content">
                                            <div className="text-items">
                                                <h3><a href="project-details.html">Residential Energy Solution</a></h3>
                                                <p>ENERGY, SOLAR</p>
                                            </div>
                                            <a href="project-details.html" className="circle-icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project-thumb-box-items-style-1 mt-2">
                                        <img src="assets/img/home-1/project/project-03.jpg" alt="img"/>
                                        <div className="project-content">
                                            <div className="text-items">
                                                <h3><a href="project-details.html">Residential Energy Solution</a></h3>
                                                <p>ENERGY, SOLAR</p>
                                            </div>
                                            <a href="project-details.html" className="circle-icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="project-thumb-box-items-style-1">
                                        <img src="assets/img/home-1/project/project-02.jpg" alt="img"/>
                                        <div className="project-content">
                                            <div className="text-items">
                                                <h3><a href="project-details.html">Residential Energy Solution</a></h3>
                                                <p>ENERGY, SOLAR</p>
                                            </div>
                                            <a href="project-details.html" className="circle-icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project-thumb-box-items-style-1 mt-2">
                                        <img src="assets/img/home-1/project/project-04.jpg" alt="img"/>
                                        <div className="project-content">
                                            <div className="text-items">
                                                <h3><a href="project-details.html">Residential Energy Solution</a></h3>
                                                <p>ENERGY, SOLAR</p>
                                            </div>
                                            <a href="project-details.html" className="circle-icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="feature-section-2 counter-feature2 section-padding fix pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="feature-box-items-2">
                                            <h2>01</h2>
                                            <div className="content">
                                                <h4>Ecology</h4>
                                                <p>Ways every day, so that all of us can be part of the changing energy
                                                    system.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="feature-box-items-2">
                                            <h2>02</h2>
                                            <div className="content">
                                                <h4>Renewable</h4>
                                                <p>Ways every day, so that all of us can be part of the changing energy
                                                    system.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="feature-box-items-2">
                                            <h2>03</h2>
                                            <div className="content">
                                                <h4>Alternative</h4>
                                                <p>Ways every day, so that all of us can be part of the changing energy
                                                    system.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="feature-box-items-2">
                                            <h2>04</h2>
                                            <div className="content">
                                                <h4>Energy</h4>
                                                <p>Ways every day, so that all of us can be part of the changing energy
                                                    system.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="work-prosec-section-3 section-padding pt-0">
                            <div className="work-shape-1">
                                <img src="assets/img/home-3/work-prosce/shape-01.png" alt="img"/>
                            </div>
                            <div className="work-shape-2">
                                <img src="assets/img/home-3/work-prosce/shape-02.png" alt="img"/>
                            </div>
                            <div className="container">
                                <div className="section-title text-center">
                                    <h6 className="sub-title color-2 wow fadeInUp"><img src="assets/img/sub-title-3.svg"
                                                                                        alt="img"/>OUR PROJECTS</h6>
                                    <h2 className="text-anim">We Following 3 Easy Steps <br/> Finished our Works</h2>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="work-prosec-card-style-3 style-2">
                                            <div className="icon">
                                                <img src="assets/img/home-3/work-prosce/icon-01.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3>Start Planning</h3>
                                                <p>Ecoly is a nonprofit environmental main dedicated to protecting planet
                                                    the through community empowerment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="work-prosec-card-style-3">
                                            <div className="icon">
                                                <img src="assets/img/home-3/work-prosce/icon-02.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3>Research</h3>
                                                <p>Ecoly is a nonprofit environmental main dedicated to protecting planet
                                                    the through community empowerment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="work-prosec-card-style-3 style-2">
                                            <div className="icon">
                                                <img src="assets/img/home-3/work-prosce/icon-03.svg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3>Completed</h3>
                                                <p>Ecoly is a nonprofit environmental main dedicated to protecting planet
                                                    the through community empowerment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="video-section fix">
                            <div className="video-wrapper fix">
                                <img dataspeed=".8" src="assets/img/home-1/video-image.jpg" alt="img"/>
                                <div className="video">
                                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                       className="video-popup ripple video-btn">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <section className="team-section section-padding fix">
                            <div className="container">
                                <div className="section-title text-center">
                                    <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg" alt="img"/>OUR
                                        TEAM MEMBERS</h6>
                                    <h2 className="text-anim">Our Solar Team Members</h2>
                                    <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">We’re finding ways to bring energy
                                        to more people in more ways every day, so that all of us can <br/> be part of the
                                        changing energy system. Because Power ring Progress means.</p>
                                </div>
                            </div>
                            <div className="swiper team-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="team-box-items-style-1">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/team/team-01.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3><a href="team-details.html">David Taylor</a></h3>
                                                <p>Solar Energy Engineer</p>
                                                <div className="bottom-items">
                                                    <div className="social-icon d-flex">
                                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                    </div>
                                                    <a href="team-details.html" className="theme-btn">
                                                        View Profile
                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-box-items-style-1">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/team/team-02.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3><a href="team-details.html">John Smith</a></h3>
                                                <p>Solar Energy Engineer</p>
                                                <div className="bottom-items">
                                                    <div className="social-icon d-flex">
                                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                    </div>
                                                    <a href="team-details.html" className="theme-btn">
                                                        View Profile
                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-box-items-style-1">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/team/team-03.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3><a href="team-details.html">William John</a></h3>
                                                <p>Solar Energy Engineer</p>
                                                <div className="bottom-items">
                                                    <div className="social-icon d-flex">
                                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                    </div>
                                                    <a href="team-details.html" className="theme-btn">
                                                        View Profile
                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-box-items-style-1">
                                            <div className="thumb">
                                                <img src="assets/img/home-1/team/team-04.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h3><a href="team-details.html">Shophia Taylor</a></h3>
                                                <p>Solar Energy Engineer</p>
                                                <div className="bottom-items">
                                                    <div className="social-icon d-flex">
                                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                    </div>
                                                    <a href="team-details.html" className="theme-btn">
                                                        View Profile
                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-dot">
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </section>


                        <section className="testimonial-section section-padding pt-0 fix">
                            <div className="container">
                                <div className="section-title text-center">
                                    <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg" alt="img"/>OUR
                                        TESTIMONIALS</h6>
                                    <h2 className="text-anim">They trust on us and our <br/>
                                        exclusive solar service</h2>
                                </div>
                                <div className="swiper testimonial-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-box-items-style-1">
                                                <h4>“GREAT DESIGN SERVICES”</h4>
                                                <div className="star">
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </div>
                                                <p className="testi-text">
                                                    They are very easy to customization in every stage of funding and
                                                    selling. It’s’ ability to oversee transactions. It’s customized our
                                                    platform to meet internal requirements, and it’s now our singular
                                                    solution.
                                                </p>
                                                <div className="client-info">
                                                    <div className="client-img">
                                                        <img src="assets/img/home-1/testimonial/client-01.png" alt="img"/>
                                                    </div>
                                                    <div className="client-content">
                                                        <h5>William John</h5>
                                                        <p>Marketing Director</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-box-items-style-1">
                                                <h4>“GREAT DESIGN SERVICES”</h4>
                                                <div className="star">
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </div>
                                                <p className="testi-text">
                                                    They are very easy to customization in every stage of funding and
                                                    selling. It’s’ ability to oversee transactions. It’s customized our
                                                    platform to meet internal requirements, and it’s now our singular
                                                    solution.
                                                </p>
                                                <div className="client-info">
                                                    <div className="client-img">
                                                        <img src="assets/img/home-1/testimonial/client-02.png" alt="img"/>
                                                    </div>
                                                    <div className="client-content">
                                                        <h5>David Johnson</h5>
                                                        <p>Marketing Director</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-box-items-style-1">
                                                <h4>“GREAT DESIGN SERVICES”</h4>
                                                <div className="star">
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </div>
                                                <p className="testi-text">
                                                    They are very easy to customization in every stage of funding and
                                                    selling. It’s’ ability to oversee transactions. It’s customized our
                                                    platform to meet internal requirements, and it’s now our singular
                                                    solution.
                                                </p>
                                                <div className="client-info">
                                                    <div className="client-img">
                                                        <img src="assets/img/home-1/testimonial/client-03.png" alt="img"/>
                                                    </div>
                                                    <div className="client-content">
                                                        <h5>Amelia Johnson</h5>
                                                        <p>Marketing Director</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-dot">
                                        <div className="dot2"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="news-section-3 section-padding fix section-bg-3">
                            <div className="container">
                                <div className="section-title text-center">
                                    <h6 className="sub-title color-2 wow fadeInUp"><img src="assets/img/sub-title-3.svg"
                                                                                        alt="img"/>OUR SERVICES</h6>
                                    <h2 className="text-anim">Read our latest insights <br/> from blog posts</h2>
                                </div>
                                <div className="row">
                                    <div className="col-xl-7 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-left-items-style-3">
                                            <div className="thumb">
                                                <img src="assets/img/home-3/news/news-01.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <div className="user-box">
                                                    <div className="user-item">
                                                        <i className="fa-solid fa-circle-user"></i>
                                                        John Smith
                                                    </div>
                                                    <span>LEARNING</span>
                                                </div>
                                                <h3><a href="news-details.html">Solar designing process from start to
                                                    implementation</a></h3>
                                                <a href="news-details.html" className="theme-btn">
                                                    Read Details
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 wow fadeInUp" data-wow-delay=".5s">
                                        <ul className="news-right-items-style-3">
                                            <li>
                                                <div className="thumb">
                                                    <img src="assets/img/home-3/news/news-02.jpg" alt="img"/>
                                                </div>
                                                <div className="content">
                                                    <span className="date-items"><i className="fa-regular fa-calendar"></i>09 May, 2025</span>
                                                    <h3><a href="news-details.html">Impact of Solar Energy on Reducing
                                                        Carbon</a></h3>
                                                    <a href="news-details.html" className="link-btn">More Details <i
                                                        className="fa-solid fa-arrow-up-right"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <img src="assets/img/home-3/news/news-03.jpg" alt="img"/>
                                                </div>
                                                <div className="content">
                                                    <span className="date-items"><i className="fa-regular fa-calendar"></i>09 May, 2025</span>
                                                    <h3><a href="news-details.html">Solar Design Journey: From Concept</a>
                                                    </h3>
                                                    <a href="news-details.html" className="link-btn">More Details <i
                                                        className="fa-solid fa-arrow-up-right"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <img src="assets/img/home-3/news/news-04.jpg" alt="img"/>
                                                </div>
                                                <div className="content">
                                                    <span className="date-items"><i className="fa-regular fa-calendar"></i>09 May, 2025</span>
                                                    <h3><a href="news-details.html">Solarva Advocates for Sustainable
                                                        Energy </a></h3>
                                                    <a href="news-details.html" className="link-btn">More Details <i
                                                        className="fa-solid fa-arrow-up-right"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="section-bg-3 pt-35">
                            <div className="cta-section-3 mt-0">
                                <div className="cta-image d-none d-xl-block">
                                    <img src="assets/img/home-3/cta-image.png" alt="img"/>
                                </div>
                                <div className="cta-shape d-none d-xl-block float-bob-y">
                                    <img src="assets/img/home-3/cta-image-shape.png" alt="img"/>
                                </div>
                                <div className="container">
                                    <div className="cta-wrapper-3">
                                        <div className="cta-content">
                                            <h2 className="text-anim">We Make Wind Energy <br/> Solution</h2>
                                            <p className="wow fadeInUp" data-wow-delay=".2s">
                                                Feel free to mix and match elements from different names to better suit your
                                                team's identity and goals.Feel free to mix.
                                            </p>
                                        </div>
                                        <div className="circle-box">
                                            <div className="text-image">
                                                <img src="assets/img/home-1/choose/text-3.png" alt="img"/>
                                            </div>
                                            <a href="about.html" className="arrow-icon"><i
                                                className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
        </>);
    }