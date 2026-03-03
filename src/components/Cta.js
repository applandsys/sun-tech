"use client";

import Link from "next/link";

export default function Cta() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrapper">
                    <div className="cta-image wow fadeInUp" data-wow-delay=".2s">
                        <img src="/assets/img/home-1/cta-image.png" alt="img" />
                    </div>
                    <h3 className="text-anim">
                        Power Your Home or Business <br /> with Green Energy
                    </h3>
                    <Link
                        href="/contact"
                        className="theme-btn wow fadeInUp"
                        data-wow-delay=".4s"
                    >
                        Learn More
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}