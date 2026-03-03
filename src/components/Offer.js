"use client";

import Image from "next/image";
import Link from "next/link";

export default function Offer() {
    return (
        <section
            className="offer-section pt-0 section-padding fix bg-cover"
            style={{ backgroundImage: "url('/assets/img/home-1/offer/offer-bg.jpg')" }}
        >
            {/* Shapes and marquee (unchanged) */}
            <div className="offer-shape-1 float-bob-x">
                <Image
                    src="/assets/img/home-1/offer/shape-1.png"
                    alt="Offer shape"
                    width={150}
                    height={150}
                />
            </div>
            <div className="circle-box">
                <div className="text-image">
                    <Image
                        src="/assets/img/home-1/choose/text-2.png"
                        alt="Text image"
                        width={120}
                        height={120}
                    />
                </div>
                <Link href="/contact" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <div className="mycustom-marque section-padding pb-0">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                    <div className="comm">
                        <div></div>
                        <div className="cmn-textslide"> Solar Panel</div>
                        <div className="cmn-textslide"> GRENNER PLANNET</div>
                        <div className="cmn-textslide"> Repairing</div>
                    </div>
                </div>
            </div>

            {/* Main content container */}
            <div className="container mx-auto px-4">
                <div className="house-image">
                    <Image
                        src="/assets/img/home-1/offer/bottom-shape.png"
                        alt="Bottom shape"
                        width={200}
                        height={50}
                    />
                </div>

                {/* Outer flex row: two cards side by side */}
                <div className="max-w-6xl mx-auto">
                    {/* Increased gap between cards from 1.25rem to 1.5rem (gap-6) */}
                    <div className="flex flex-row gap-6 items-stretch justify-center">
                        {/* Card 1 – total width 45% of container */}
                        <div className="w-[45%] wow fadeInUp p-1" data-wow-delay=".3s">
                            <div className="offer-box-items h-full flex flex-row overflow-hidden rounded-lg shadow-lg">
                                {/* Left side: text – now 60% of card width */}
                                <div className="w-3/5 p-6 flex flex-col justify-center text-left bg-white">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        FEXIBLE PAYMENT
                                    </span>
                                    <h3 className="text-lg font-bold mt-1 text-gray-900">
                                        Get Expert Guidence
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1 mb-3">
                                        Resalable energy solution
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="self-start theme-btn inline-flex items-center text-sm bg-[#b9d933] text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
                                    >
                                        View Offer
                                        <i className="fa-solid fa-arrow-up-right ml-2"></i>
                                    </Link>
                                </div>

                                {/* Right side: image – now 40% of card width */}
                                <div
                                    className="w-2/5 relative min-h-[200px] overflow-hidden bg-gray-200"
                                    style={{ padding: "4px", borderRadius: "8px" }}
                                >
                                    <Image
                                        src="/assets/img/home-1/offer/offer-01.jpg"
                                        alt="Offer 1"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 – same adjustments */}
                        <div className="w-[45%] wow fadeInUp p-1" data-wow-delay=".5s">
                            <div className="offer-box-items h-full flex flex-row overflow-hidden rounded-lg shadow-lg">
                                <div className="w-3/5 p-4 flex flex-col justify-center text-left bg-white">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        GREENER PLANNET
                                    </span>
                                    <h3 className="text-lg font-bold mt-1 text-gray-900">
                                        Saves The Nature
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1 mb-3">
                                        Resalable energy solution
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="self-start theme-btn inline-flex items-center text-sm bg-[#b9d933] text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
                                    >
                                        View Offer
                                        <i className="fa-solid fa-arrow-up-right ml-2"></i>
                                    </Link>
                                </div>
                                <div
                                    className="w-2/5 relative min-h-[200px] overflow-hidden bg-gray-200"
                                    style={{ padding: "4px", borderRadius: "8px" }}
                                >
                                    <Image
                                        src="/assets/img/home-1/offer/offer-02.jpg"
                                        alt="Offer 2"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}