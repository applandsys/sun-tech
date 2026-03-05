'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Bootstrap CSS (if not already global)
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Brand() {
    const swiperRef = useRef(null);

    const brandImages = [
        'brand-01.png',
        'brand-02.png',
        'brand-03.png',
        'brand-04.png',
        'brand-05.png',
        'brand-06.png',
    ];

    const seamlessImages = [...brandImages, ...brandImages, ...brandImages];

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
            swiperRef.current.slideTo(0, 500);
        }
    };

    return (
        <section className="brand-section">
            {/* Bootstrap container with custom top/bottom padding (50px) */}
            <div className="container py-5" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                {/* Top text with decorative lines - using flex utilities */}
                <div className="d-flex align-items-center justify-content-center w-100">
                    {/* Left line */}
                    <div className="flex-grow-1" style={{ height: '2px', backgroundColor: '#d1d5db' }}></div>

                    {/* Text */}
                    <p className="fs-5 text-secondary px-4 text-nowrap mb-0">
                        We are trusted by brands across all industries
                    </p>

                    {/* Right line */}
                    <div className="flex-grow-1" style={{ height: '2px', backgroundColor: '#d1d5db' }}></div>
                </div>

                {/* Gap between text and slider - using Bootstrap spacing (mb-5 = 3rem, but we need 4rem/64px) */}
                <div className="mb-5" style={{ marginBottom: '4rem' }}></div>

                {/* Swiper Carousel */}
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            swiper.autoplay.stop();
                        }}
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            reverseDirection: true,
                            stopOnLastSlide: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 20 },
                            1024: { slidesPerView: 5, spaceBetween: 25 },
                            1280: { slidesPerView: 6, spaceBetween: 30 },
                        }}
                        className="brand-slider"
                    >
                        {seamlessImages.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`}>
                                <div className="brand-image text-center d-flex align-items-center justify-content-center" style={{ height: '96px' }}>
                                    <img
                                        src={`/assets/img/home-1/brand/${image}`}
                                        alt={`Brand ${index % brandImages.length + 1}`}
                                        className="mw-100"
                                        style={{ maxHeight: '64px', width: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}