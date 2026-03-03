"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import 'animate.css';

export default function Services() {
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

    const services = [
        {
            id: 1,
            title: "Renewable Energy",
            link: "/service-details",
            delay: ".2s",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.447 45.6886H24.4375C24.0078 45.6886 23.6202 45.4298 23.4557 45.0324C23.2913 44.6355 23.3822 44.1786 23.6861 43.8745L38.5611 28.9996C38.9053 28.6552 39.4396 28.5891 39.8573 28.8384C40.2751 29.0883 40.4702 29.5899 40.3304 30.0563L37.553 39.3135H43.5625C43.9922 39.3135 44.3798 39.5723 44.5442 39.9691C44.7087 40.3666 44.6178 40.8235 44.3139 41.127L29.4389 56.0025C29.0946 56.3464 28.5604 56.4124 28.1426 56.1631C27.7249 55.9132 27.5298 55.4117 27.6696 54.9458L30.447 45.6886ZM37.0838 33.4822L27.0028 43.5634H31.875C32.2107 43.5634 32.5269 43.7222 32.7275 43.9918C32.9277 44.2613 32.9893 44.6093 32.8929 44.9312L30.9162 51.5193L40.9972 41.4381H36.125C35.7892 41.4381 35.473 41.2799 35.2724 41.0103C35.0723 40.7408 35.0106 40.3922 35.1071 40.0703L37.0838 33.4822Z" fill="black" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Solar Maintenance",
            link: "/service-details",
            delay: ".4s",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M47.812 21.2498H44.6245C44.2063 21.2498 43.8266 21.0044 43.6555 20.6229C43.4838 20.2409 43.5523 19.7942 43.8306 19.4814L52.3306 9.9192C52.6235 9.58944 53.0899 9.4752 53.5019 9.63183C53.9144 9.78845 54.187 10.1838 54.187 10.6251V17H57.3745C57.7927 17 58.1723 17.2454 58.3435 17.6274C58.5152 18.0089 58.4466 18.4556 58.1684 18.7684L49.6684 28.3306C49.3754 28.6604 48.909 28.775 48.4971 28.618C48.0845 28.4613 47.812 28.066 47.812 27.6251V21.2498ZM52.062 13.4194L46.9903 19.1249H48.8745C49.4615 19.1249 49.937 19.6006 49.937 20.1874V24.8304L55.0086 19.1249H53.1245C52.5374 19.1249 52.062 18.6492 52.062 18.0624V13.4194Z" fill="#091613" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Energy Saving Devices",
            link: "/service-details",
            delay: ".6s",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.9376 10.6252C45.8328 10.6252 42.5001 13.958 42.5001 18.0627C42.5001 22.1675 45.8328 25.5003 49.9376 25.5003C54.0424 25.5003 57.3751 22.1675 57.3751 18.0627C57.3751 13.958 54.0424 10.6252 49.9376 10.6252ZM49.9376 12.7502C52.8694 12.7502 55.2501 15.131 55.2501 18.0627C55.2501 20.9945 52.8694 23.3752 49.9376 23.3752C47.0058 23.3752 44.6251 20.9945 44.6251 18.0627C44.6251 15.131 47.0058 12.7502 49.9376 12.7502Z" fill="#091613" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Wind Eco-Power",
            link: "/service-details",
            delay: ".8s",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.8116 45.6881H27.6241C27.2059 45.6881 26.8263 45.4426 26.6551 45.0611C26.4834 44.6792 26.552 44.2325 26.8302 43.9197L35.3302 34.3574C35.6232 34.0277 36.0895 33.9134 36.5015 34.0701C36.914 34.2267 37.1866 34.622 37.1866 35.0634V41.4382H40.3741C40.7923 41.4382 41.172 41.6836 41.3431 42.0656C41.5148 42.4471 41.4462 42.8938 41.168 43.2066L32.668 52.7688C32.375 53.0986 31.9087 53.2133 31.4967 53.0562C31.0842 52.8996 30.8116 52.5042 30.8116 52.0633V45.6881ZM35.0616 37.8576L29.9899 43.5631H31.8741C32.4612 43.5631 32.9366 44.0388 32.9366 44.6256V49.2686L38.0083 43.5631H36.1241C35.537 43.5631 35.0616 43.0875 35.0616 42.5007V37.8576Z" fill="#091613" />
                </svg>
            )
        }
    ];

    return (
        <section className="service-section section-padding fix" style={{ paddingLeft: '70px' }}>
            <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="row g-4 align-items-center" style={{ marginLeft: 0, marginRight: 0 }}>
                    {/* LEFT COLUMN – heading and button - 50% width with 70px padding from the section */}
                    <div className="col-lg-6" style={{ paddingLeft: '70px', paddingRight: '30px' }}>
                        <div className="service-content-style-1">
                            <div className="section-title mb-0">
                                <h6 className="sub-title wow fadeInUp">
                                    <Image
                                        src="/assets/img/sub-title-1.svg"
                                        alt="img"
                                        width={20}
                                        height={20}
                                    />
                                    OUR SERVICES
                                </h6>
                                <h2 className="text-anim" style={{ textAlign: 'left' }}>
                                    Complete solar <br/>solution with repair <br/> services
                                </h2>
                            </div>
                            <Link
                                href="/service"
                                className="theme-btn wow fadeInUp"
                                data-wow-delay=".2s"
                                style={{ marginTop: '30px', display: 'inline-block' }}
                            >
                                View Our Services
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN – service list - 50% width */}
                    <div className="col-lg-6" style={{ paddingRight: '220px', paddingLeft: '730px' }}>
                        <ul className="service-box-style-1" style={{ marginLeft: 0, maxWidth: '100%' }}>
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className="wow fadeInUp"
                                    data-wow-delay={service.delay}
                                >
                                    <div className="first-text">
                                        <div className="icon">
                                            {service.svg}
                                        </div>
                                        <h3>
                                            <Link href={service.link}>
                                                {service.title}
                                            </Link>
                                        </h3>
                                    </div>
                                    <Link href={service.link} className="arrow-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Background image - positioned absolutely behind */}
            <div className="service-image fix" style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                zIndex: -1,
                borderRadius: 0
            }}>
                <Image
                    data-speed=".8"
                    src="/assets/img/home-1/service/service-01.jpg"
                    alt="img"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    );
}