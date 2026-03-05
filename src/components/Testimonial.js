"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
    return (
        <section className="testimonial-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title">
                        <img src="assets/img/sub-title-1.svg" alt="img" />
                        OUR TESTIMONIALS
                    </h6>

                    <h2>
                        They trust on us and our <br />
                        exclusive solar service
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}

                    autoplay={{
                        delay: 0, // continuous scroll
                        disableOnInteraction: false,
                    }}

                    speed={4000} // smooth slow movement
                    pagination={{
                        clickable: true,
                        el: ".dot2",
                    }}

                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    <SwiperSlide>
                        <div className="testimonial-box-items-style-1">
                            <h4>“GREAT DESIGN SERVICES”</h4>

                            <p className="testi-text">
                                They are very easy to customization in every stage of funding and selling.
                            </p>

                            <div className="client-info">
                                <div className="client-img">
                                    <img src="assets/img/home-1/testimonial/client-01.png" alt="img" />
                                </div>

                                <div className="client-content">
                                    <h5>William John</h5>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-box-items-style-1">
                            <h4>“GREAT DESIGN SERVICES”</h4>

                            <p className="testi-text">
                                They are very easy to customization in every stage of funding and selling.
                            </p>

                            <div className="client-info">
                                <div className="client-img">
                                    <img src="assets/img/home-1/testimonial/client-02.png" alt="img" />
                                </div>

                                <div className="client-content">
                                    <h5>David Johnson</h5>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-box-items-style-1">
                            <h4>“GREAT DESIGN SERVICES”</h4>

                            <p className="testi-text">
                                They are very easy to customization in every stage of funding and selling.
                            </p>

                            <div className="client-info">
                                <div className="client-img">
                                    <img src="assets/img/home-1/testimonial/client-03.png" alt="img" />
                                </div>

                                <div className="client-content">
                                    <h5>Amelia Johnson</h5>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-box-items-style-1">
                            <h4>“GREAT DESIGN SERVICES”</h4>

                            <p className="testi-text">
                                They are very easy to customization in every stage of funding and selling.
                            </p>

                            <div className="client-info">
                                <div className="client-img">
                                    <img src="assets/img/home-1/testimonial/client-03.png" alt="img" />
                                </div>

                                <div className="client-content">
                                    <h5>Amelia Johnson</h5>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

                <div className="swiper-dot">
                    <div className="dot2"></div>
                </div>
            </div>
        </section>
    );
}