"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "animate.css";

export default function ChooseUs() {
    const [activeTab, setActiveTab] = useState("About");

    useEffect(() => {
        const initWOW = async () => {
            if (typeof window !== "undefined") {
                const WOW = (await import("wowjs")).default;
                new WOW.WOW({
                    live: true,
                    offset: 0,
                    mobile: true,
                }).init();
            }
        };
        initWOW();
    }, []);

    const tabs = [
        { id: "About", label: "About Us" },
        { id: "Mission", label: "Our Mission" },
        { id: "Vision", label: "Our Vision" },
    ];

    const tabContent = {
        About: (
            <>
                <p className="choose-text wow fadeInUp text-gray-600 mb-6" data-wow-delay=".2s">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.<br/>Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
                <div className="icon-box-items wow fadeInUp flex gap-4 mb-6" data-wow-delay=".4s">
                    <div className="icon flex-shrink-0">
                        <Image src="/assets/img/home-1/choose/icon-1.svg" alt="icon" width={48} height={48} />
                    </div>
                    <div className="content">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Technology</h4>
                        <p className="text-gray-600">People in more ways every day, so that all of us can be part of the<br/>changing energy system.</p>
                    </div>
                </div>
                <div className="list-items wow fadeInUp flex gap-6 mb-6" data-wow-delay=".6s">
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Expert Installation
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Battery Storage Solutions
                        </li>
                    </ul>
                </div>
                <div className="bottom-items wow fadeInUp flex items-center gap-6 flex-wrap" data-wow-delay=".8s">
                    <Link href="/about" className="theme-btn inline-flex items-center gap-3 px-8 py-4 bg-[#b9d933] text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
                        Discover More
                        <i className="fa-solid fa-arrow-up-right bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#b9d933] group-hover:text-black transition-all duration-300 text-xs"></i>
                    </Link>
                    <div className="phone-box-items flex items-center gap-3">
                        <div className="icon text-3xl text-[#b9d933]">
                            <i className="fa-thin fa-circle-phone"></i>
                        </div>
                        <div className="content">
                            <p className="text-sm text-gray-500">Talk To Us</p>
                            <a href="tel:(+25)2582355889" className="text-lg font-semibold text-gray-900 hover:text-[#b9d933]">(+25) 258 235 5889</a>
                        </div>
                    </div>
                </div>
            </>
        ),
        Mission: (
            <>
                <p className="choose-text text-gray-600 mb-6">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
                <div className="icon-box-items flex gap-4 mb-6">
                    <div className="icon flex-shrink-0">
                        <Image src="/assets/img/home-1/choose/icon-1.svg" alt="icon" width={48} height={48} />
                    </div>
                    <div className="content">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Technology</h4>
                        <p className="text-gray-600">People in more ways every day, so that all of us can be part of the changing energy system.</p>
                    </div>
                </div>
                <div className="list-items flex gap-6 mb-6">
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Expert Installation
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Battery Storage Solutions
                        </li>
                    </ul>
                </div>
                <div className="bottom-items flex items-center gap-6 flex-wrap">
                    <Link href="/about" className="theme-btn inline-flex items-center gap-3 px-8 py-4 bg-[#b9d933] text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
                        Discover More
                        <i className="fa-solid fa-arrow-up-right bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#b9d933] group-hover:text-black transition-all duration-300 text-xs"></i>
                    </Link>
                    <div className="phone-box-items flex items-center gap-3">
                        <div className="icon text-3xl text-[#b9d933]">
                            <i className="fa-thin fa-circle-phone"></i>
                        </div>
                        <div className="content">
                            <p className="text-sm text-gray-500">Talk To Us</p>
                            <a href="tel:(+25)2582355889" className="text-lg font-semibold text-gray-900 hover:text-[#b9d933]">(+25) 258 235 5889</a>
                        </div>
                    </div>
                </div>
            </>
        ),
        Vision: (
            <>
                <p className="choose-text text-gray-600 mb-6">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
                <div className="icon-box-items flex gap-4 mb-6">
                    <div className="icon flex-shrink-0">
                        <Image src="/assets/img/home-1/choose/icon-1.svg" alt="icon" width={48} height={48} />
                    </div>
                    <div className="content">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Technology</h4>
                        <p className="text-gray-600">People in more ways every day, so that all of us can be part of the changing energy system.</p>
                    </div>
                </div>
                <div className="list-items flex gap-6 mb-6">
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Expert Installation
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center gap-3 text-gray-700">
                            <Image src="/assets/img/home-1/about/check-icon.svg" alt="check" width={20} height={20} />
                            Battery Storage Solutions
                        </li>
                    </ul>
                </div>
                <div className="bottom-items flex items-center gap-6 flex-wrap">
                    <Link href="/about" className="theme-btn inline-flex items-center gap-3 px-8 py-4 bg-[#b9d933] text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
                        Discover More
                        <i className="fa-solid fa-arrow-up-right bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#b9d933] group-hover:text-black transition-all duration-300 text-xs"></i>
                    </Link>
                    <div className="phone-box-items flex items-center gap-3">
                        <div className="icon text-3xl text-[#b9d933]">
                            <i className="fa-thin fa-circle-phone"></i>
                        </div>
                        <div className="content">
                            <p className="text-sm text-gray-500">Talk To Us</p>
                            <a href="tel:(+25)2582355889" className="text-lg font-semibold text-gray-900 hover:text-[#b9d933]">(+25) 258 235 5889</a>
                        </div>
                    </div>
                </div>
            </>
        ),
    };

    return (
        <section className="choose-us-section section-padding fix py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* CRITICAL LAYOUT: inline styles to force side‑by‑side */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
                    {/* Left column – Image */}
                    <div style={{ width: '50%' }} className="wow fadeInUp" data-wow-delay=".3s">
                        <div className="choose-image-style-1 fix relative">
                            <Image
                                data-speed=".8"
                                src="/assets/img/home-1/choose/choose-01.png"
                                alt="Choose us"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                            <div className="circle-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="text-image">
                                    <Image src="/assets/img/home-1/choose/text.png" alt="text circle" width={120} height={120} />
                                </div>
                                <Link href="/about" className="arrow-icon absolute inset-0 flex items-center justify-center">
                                    <i className="fa-solid fa-arrow-right text-2xl text-black"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right column – Content */}
                    <div style={{ width: '50%' }}>
                        <div className="choose-content-style-1">
                            <div className="section-title mb-8">
                                <h6 className="sub-title wow fadeInUp flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
                                    <Image src="/assets/img/sub-title-1.svg" alt="icon" width={20} height={20} />
                                    WHY CHOOSE US
                                </h6>
                                <h2 className="text-anim text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-gray-900">
                                    Ecoly believes in sustainable <br/> energy practices
                                </h2>
                            </div>

                            <ul className="nav flex gap-4 border-b border-gray-200 mb-6">
                                {tabs.map((tab) => (
                                    <li key={tab.id} className="nav-item wow fadeInUp" data-wow-delay={tab.id === "About" ? ".2s" : ".4s"}>
                                        <button
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`nav-link pb-2 px-1 text-base font-semibold transition-colors relative ${
                                                activeTab === tab.id
                                                    ? "text-[#b9d933] border-b-2 border-[#b9d933]"
                                                    : "text-gray-600 hover:text-gray-900"
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="tab-content">
                                {tabContent[activeTab]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}