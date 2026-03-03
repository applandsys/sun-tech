// components/Brand.js
'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

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

    // Triple the images for seamless infinite loop
    const seamlessImages = [...brandImages, ...brandImages, ...brandImages];

    // Handle mouse enter - start sliding
    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    // Handle mouse leave - stop sliding and reset
    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
            // Reset to first slide
            swiperRef.current.slideTo(0, 500);
        }
    };

    return (
        <section className="brand-section">
            {/* Container with 50px top and bottom spacing */}
            <div className="container mx-auto px-4 py-[50px]">
                {/* Top text with decorative lines - LEFT AND RIGHT */}
                <div className="flex items-center justify-center w-full">
                    {/* Left line - with explicit background color */}
                    <div className="flex-1 h-0.5 bg-gray-300"></div>

                    {/* Text with margins */}
                    <p className="text-lg text-gray-600 px-8 whitespace-nowrap">
                        We are trusted by brands across all industries
                    </p>

                    {/* Right line - with explicit background color */}
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                </div>

                {/* LARGER GAP between text and slider - increased from mb-6 to mb-16 */}
                <div className="mb-16"></div>

                {/* Swiper Carousel - Only slides on hover */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        onSwiper={(swiper) => {
                            // Store swiper instance
                            swiperRef.current = swiper;
                            // Stop autoplay initially
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
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 25
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            },
                        }}
                        className="brand-slider"
                    >
                        {seamlessImages.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`}>
                                <div className="brand-image text-center flex items-center justify-center h-24">
                                    <img
                                        src={`/assets/img/home-1/brand/${image}`}
                                        alt={`Brand ${index % brandImages.length + 1}`}
                                        className="max-w-full max-h-16 w-auto object-contain mx-auto"
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