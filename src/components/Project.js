// src/app/components/Project.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Project() {
    const projects = [
        {
            id: 1,
            src: "/assets/img/home-1/project/project-01.jpg",
            title: "Residential Energy Solution",
            category: "ENERGY, SOLAR",
            delay: ".3s",
        },
        {
            id: 2,
            src: "/assets/img/home-1/project/project-02.jpg",
            title: "Residential Energy Solution",
            category: "ENERGY, SOLAR",
            delay: ".4s",
        },
        {
            id: 3,
            src: "/assets/img/home-1/project/project-03.jpg",
            title: "Residential Energy Solution",
            category: "ENERGY, SOLAR",
            delay: ".5s",
        },
        {
            id: 4,
            src: "/assets/img/home-1/project/project-04.jpg",
            title: "Residential Energy Solution",
            category: "ENERGY, SOLAR",
            delay: ".6s",
        },
    ];

    return (
        <section className="project-section section-padding pt-0">
            <div className="container mx-auto px-4">
                {/* Title section */}
                <div className="section-title-area text-center mb-12">
                    <div className="section-title">
                        <h6 className="sub-title inline-flex items-center gap-2 text-green-600 font-semibold uppercase tracking-wider wow fadeInUp">
                            <Image src="/assets/img/sub-title-1.svg" alt="img" width={20} height={20} />
                            OUR SUCCESSFULL PROJECT
                        </h6>
                    </div>
                    <h2 className="text-anim text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-gray-900 wow fadeInUp">
                        View Our Portfolio Of <br /> Solar Success
                    </h2>
                </div>

                {/* Masonry grid for collage layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Column 1: project-01.jpg */}
                    <div className="grid gap-4">
                        <div className="project-thumb-box-items-style-1 wow fadeInUp" data-wow-delay={projects[0].delay}>
                            <Image
                                src={projects[0].src}
                                alt={projects[0].title}
                                width={400}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div className="project-content">
                                <div className="text-items">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                                        <Link href="/project-details">
                                            {projects[0].title}
                                        </Link>
                                    </h3>
                                    <p className="text-green-600 mt-1 text-xs uppercase tracking-wider">
                                        {projects[0].category}
                                    </p>
                                </div>
                                <Link href="/project-details" className="circle-icon">
                                    <i className="fa-solid fa-arrow-up-right text-xs md:text-sm"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Two stacked images */}
                    <div className="grid gap-4">
                        {/* project-02.jpg */}
                        <div className="project-thumb-box-items-style-1 wow fadeInUp" data-wow-delay={projects[1].delay}>
                            <Image
                                src={projects[1].src}
                                alt={projects[1].title}
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                            <div className="project-content">
                                <div className="text-items">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                                        <Link href="/project-details">
                                            {projects[1].title}
                                        </Link>
                                    </h3>
                                    <p className="text-green-600 mt-1 text-xs uppercase tracking-wider">
                                        {projects[1].category}
                                    </p>
                                </div>
                                <Link href="/project-details" className="circle-icon">
                                    <i className="fa-solid fa-arrow-up-right text-xs md:text-sm"></i>
                                </Link>
                            </div>
                        </div>

                        {/* project-04.jpg */}
                        <div className="project-thumb-box-items-style-1 wow fadeInUp" data-wow-delay={projects[3].delay}>
                            <Image
                                src={projects[3].src}
                                alt={projects[3].title}
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                            <div className="project-content">
                                <div className="text-items">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                                        <Link href="/project-details">
                                            {projects[3].title}
                                        </Link>
                                    </h3>
                                    <p className="text-green-600 mt-1 text-xs uppercase tracking-wider">
                                        {projects[3].category}
                                    </p>
                                </div>
                                <Link href="/project-details" className="circle-icon">
                                    <i className="fa-solid fa-arrow-up-right text-xs md:text-sm"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: project-03.jpg */}



                    {/* Column 4: Empty or add another project */}
                    <div className="grid gap-4">
                        {/* You can add another project here if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}