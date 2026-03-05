"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamSection() {
    const team = [
        { name: "John Doe", role: "CEO", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Sarah Smith", role: "Designer", img: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Michael Lee", role: "Developer", img: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Emma Watson", role: "Marketing", img: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "David Kim", role: "Backend", img: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Olivia Brown", role: "UI Designer", img: "https://randomuser.me/api/portraits/women/6.jpg" },
    ];

    // Refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Our Team</h2>

                <div className="position-relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true, // optional: pause on hover
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // Attach navigation refs
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="card shadow border-0 text-center">
                                    <img src={member.img} className="card-img-top" alt={member.name} />
                                    <div className="card-body">
                                        <h5>{member.name}</h5>
                                        <p className="text-muted">{member.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Plain colored arrows */}
                    <div
                        ref={prevRef}
                        className="swiper-button-prev"
                        style={{ color: "#ff6600" }}
                    ></div>
                    <div
                        ref={nextRef}
                        className="swiper-button-next"
                        style={{ color: "#ff6600" }}
                    ></div>
                </div>
            </div>
        </section>
    );
}