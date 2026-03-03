"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";

// Swiper core + modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonial() {
    const [mounted, setMounted] = useState(false);
    const swiperRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const testimonials = [
        {
            name: "David Johnson",
            position: "Marketing Director",
            quote: "They are very easy to customization in every stage of funding and selling. It's ability to oversee transactions. It's customized our platform to meet internal requirements, and it's now our singular solution.",
            title: "GREAT DESIGN SERVICES",
            avatar: "/assets/img/home-1/testimonial/client-01.png"
        },
        {
            name: "Amelia Johnson",
            position: "Marketing Director",
            quote: "They are very easy to customization in every stage of funding and selling. It's ability to oversee transactions. It's customized our platform to meet internal requirements, and it's now our singular solution.",
            title: "GREAT DESIGN SERVICES",
            avatar: "/assets/img/home-1/testimonial/client-02.png"
        },
        {
            name: "William John",
            position: "Marketing Director",
            quote: "They are very easy to customization in every stage of funding and selling. It's ability to oversee transactions. It's customized our platform to meet internal requirements, and it's now our singular solution.",
            title: "GREAT DESIGN SERVICES",
            avatar: "/assets/img/home-1/testimonial/client-03.png"
        },
        {
            name: "Sarah Wilson",
            position: "Marketing Director",
            quote: "They are very easy to customization in every stage of funding and selling. It's ability to oversee transactions. It's customized our platform to meet internal requirements, and it's now our singular solution.",
            title: "GREAT DESIGN SERVICES",
            avatar: "/assets/img/home-1/testimonial/client-04.png"
        },
    ];

    // Fallback avatar colors if images don't exist
    const getFallbackAvatar = (name) => {
        const colors = ['#0066B3', '#FFB800', '#0A1E2C', '#5C6A7A'];
        const index = name.length % colors.length;
        return colors[index];
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    if (!mounted) {
        return null;
    }

    return (
        <section className="testimonial-section">
            <div className="container">
                {/* Section Title */}
                <div className="section-title">
                    <h6 className="sub-title">
                        <Image
                            src="/assets/img/sub-title-1.svg"
                            alt="Our Testimonials icon"
                            width={28}
                            height={28}
                        />
                        OUR TESTIMONIALS
                    </h6>
                    <h2 className="text-anim">
                        They trust on us and our
                        <br /> exclusive solar service
                    </h2>
                </div>

                {/* Swiper Slider */}
                <div className="testimonial-slider">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                        className="testimonial-swiper"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-card">
                                    <h4 className="testimonial-title">“{item.title}”</h4>

                                    {/* Star Rating */}
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="testimonial-text">
                                        {item.quote}
                                    </p>

                                    {/* Client Info with Fallback Avatar */}
                                    <div className="client-info">
                                        <div className="client-avatar">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                width={65}
                                                height={65}
                                                onError={(e) => {
                                                    // If image fails to load, replace with fallback div
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `
                                                        <div class="fallback-avatar" style="background-color: ${getFallbackAvatar(item.name)}">
                                                            ${getInitials(item.name)}
                                                        </div>
                                                    `;
                                                }}
                                            />
                                        </div>
                                        <div className="client-details">
                                            <h5>{item.name}</h5>
                                            <p>{item.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="testimonial-navigation">


                    </div>

                    {/* Pagination Dots */}
                    <div className="testimonial-pagination"></div>
                </div>
            </div>
        </section>
    );
}