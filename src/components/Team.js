// src/app/components/Team.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Team() {
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

    const teamMembers = [
        {
            id: 1,
            name: "David Taylor",
            role: "Solar Energy Engineer",
            image: "/assets/img/home-1/team/team-01.jpg",
            social: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#",
            },
        },
        {
            id: 2,
            name: "John Smith",
            role: "Solar Energy Engineer",
            image: "/assets/img/home-1/team/team-02.jpg",
            social: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#",
            },
        },
        {
            id: 3,
            name: "William John",
            role: "Solar Energy Engineer",
            image: "/assets/img/home-1/team/team-03.jpg",
            social: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#",
            },
        },
        {
            id: 4,
            name: "Shophia Taylor",
            role: "Solar Energy Engineer",
            image: "/assets/img/home-1/team/team-04.jpg",
            social: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#",
            },
        },
    ];

    return (
        <section className="team-section section-padding fix">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp">
                        <Image
                            src="/assets/img/sub-title-1.svg"
                            alt="icon"
                            width={20}
                            height={20}
                        />
                        OUR TEAM MEMBERS
                    </h6>
                    <h2 className="text-anim">
                        Our Solar Team Members
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".2s">
                        We're finding ways to bring energy to more people in more ways every day, so that all of us can <br /> be part of the changing energy system. Because Power ring Progress means.
                    </p>
                </div>

                {/* Team Slider */}
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: ".swiper-dot"
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    }}
                    className="team-slider"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="team-box-items-style-1">
                                <div className="thumb">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/team-details">
                                            {member.name}
                                        </Link>
                                    </h3>
                                    <p>{member.role}</p>
                                    <div className="bottom-items">
                                        <div className="social-icon flex items-center gap-3">
                                            <a href={member.social.facebook}>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href={member.social.twitter}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href={member.social.instagram}>
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href={member.social.linkedin}>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                        <Link
                                            href="/team-details"
                                            className="theme-btn"
                                        >
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom pagination dots container */}
                <div className="swiper-dot"></div>
            </div>
        </section>
    );
}