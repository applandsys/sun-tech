'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import 'animate.css';

export default function About() {
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
        <section className="about-section pt-0 py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Main 2‑column grid: image (4) + content (8) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN – IMAGE with "ABOUT COMPANY" label */}
                    <div className="lg:col-span-4">
                        <div className="about-image-items-style-1 space-y-6">
                            <div className="section-title mb-0 lg:ml-[120px] md:ml-[60px] ml-0">
                                <h6 className="sub-title wow fadeInUp flex items-center gap-2">
                                    <Image
                                        src="/assets/img/sub-title-1.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                                        ABOUT COMPANY
                                    </span>
                                </h6>
                            </div>
                            {/* Added overflow-visible to prevent clipping, and translate to image */}
                            <div className="about-image wow fadeInUp overflow-visible" data-wow-delay=".2s">
                                <Image
                                    src="/assets/img/home-1/about/about-01.png"
                                    alt="Solar panels and worker"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto rounded-lg shadow-lg lg:ml-[120px] md:ml-[60px] ml-0"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN – ALL TEXT CONTENT */}
                    <div className="lg:col-span-8">
                        <div className="about-content-style-1 space-y-8">
                            {/* Main heading - Perfect medium size */}
                            <div className="section-title mb-0">
                                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-snug text-gray-900">
                                    Discover our journey of delivering<br />
                                    eco-friendly solar power that empowers<br />
                                    communities and protects the planet
                                </h2>
                            </div>

                            {/* TWO‑COLUMN STATISTICS - First row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* First stat column */}
                                <div className="icon-box-items wow fadeInUp space-y-3" data-wow-delay=".6s">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Image
                                            src="/assets/img/home-1/about/check-icon.svg"
                                            alt="check"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 flex-shrink-0"
                                        />
                                        <span>24/7 Customer Support</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Image
                                            src="/assets/img/home-1/about/check-icon.svg"
                                            alt="check"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 flex-shrink-0"
                                        />
                                        <span>Lower Energy Costs</span>
                                    </div>
                                </div>

                                {/* Second stat column */}
                                <div className="icon-box-items wow fadeInUp space-y-3" data-wow-delay=".6s">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Image
                                            src="/assets/img/home-1/about/check-icon.svg"
                                            alt="check"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 flex-shrink-0"
                                        />
                                        <span>Energy Independence</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Image
                                            src="/assets/img/home-1/about/check-icon.svg"
                                            alt="check"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 flex-shrink-0"
                                        />
                                        <span>Expert Installation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Statistics Cards - Two in a row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* First stat card */}
                                <div className="icon-box-items wow fadeInUp flex items-start gap-4" data-wow-delay=".6s">
                                    <div className="icon flex-shrink-0">
                                        <Image
                                            src="/assets/img/home-1/about/icon-1.svg"
                                            alt=""
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <div className="content">
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            <span className="count">456</span>K+
                                        </h2>
                                        <p className="text-gray-600 mt-1 text-sm">
                                            Our design philosophy <br /> is more than aesthetics
                                        </p>
                                    </div>
                                </div>

                                {/* Second stat card */}
                                <div className="icon-box-items wow fadeInUp flex items-start gap-4" data-wow-delay=".6s">
                                    <div className="icon flex-shrink-0">
                                        <Image
                                            src="/assets/img/home-1/about/icon-2.svg"
                                            alt=""
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <div className="content">
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            <span className="count">97</span>%
                                        </h2>
                                        <p className="text-gray-600 mt-1 text-sm">
                                            Customers are served <br /> behind the digital marketing
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <div className="pt-4">
                                <a
                                    href="/about"
                                    className="theme-btn wow fadeInUp inline-flex items-center gap-3 px-8 py-4 bg-[#b9d933] text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
                                    data-wow-delay=".9s"
                                >
                                    More About Us
                                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#b9d933] group-hover:text-black transition-all duration-300">
                                        <i className="fa-solid fa-arrow-up-right text-xs"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}