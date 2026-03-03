"use client";

import Image from "next/image";

export default function Video() {
    return (
        <div className="video-section fix">
            <div className="video-wrapper fix">
                <Image
                    data-speed=".8"
                    src="/assets/img/home-1/video-image.jpg"
                    alt="Video background"
                    width={1200}
                    height={600}
                    style={{ objectFit: "cover" }}
                />
                <div className="video">
                    <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-popup ripple video-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}