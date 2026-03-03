import Link from 'next/link';

export default function Header() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="mega-menu-wrapper">
                <div className="header-main">
                    <div className="header-left">
                        <a href="index.html" className="header-logo">
                            <img src="assets/img/logo/black-logo.png" alt="Logo"
                                 style={
                                            {
                                                maxWidth:'160px',
                                                width:'100%',
                                                height:'auto' + ''}
                                        }/>
                        </a>
                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="has-dropdown menu-thumb">
                                            <a href="javascript:void(0)">
                                                Home
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu has-homemenu">
                                                <li>
                                                    <div className="homemenu-items">
                                                        <div className="row row-cols-xl-4 row-cols-md-2 row-cols-2">
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb">
                                                                    <a href="index.html">
                                                                        <img src="assets/img/header/home-1.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index.html">
                                                                            Home Solar 01
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-2.html">
                                                                        <img src="assets/img/header/home-2.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-2.html">
                                                                            Home Solar 02
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-3.html">
                                                                        <img src="assets/img/header/home-3.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-3.html">
                                                                            Environment
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-4.html">
                                                                        <img src="assets/img/header/home-4.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-4.html">
                                                                            Hydro Energy
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-5.html">
                                                                        <img src="assets/img/header/home-5.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-5.html">
                                                                            Hydro Power
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-6.html">
                                                                        <img src="assets/img/header/home-6.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-6.html">
                                                                            Wind & Energy
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <a href="index-7.html">
                                                                        <img src="assets/img/header/home-7.jpg"
                                                                             alt="img"/>
                                                                    </a>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        <a href="index-7.html">
                                                                            Renewable & Energy
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="assets/img/header/home-8.jpg" alt="img"/>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Coming Soon
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown active d-xl-none">
                                            <a href="javascript:void(0)" className="border-none">
                                                Home
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="index.html">Home Solar 01</a></li>
                                                <li><a href="index-2.html">Home Solar 02</a></li>
                                                <li><a href="index-3.html">Environment</a></li>
                                                <li><a href="index-4.html">Hydro Energy</a></li>
                                                <li><a href="index-5.html">Hydro Power</a></li>
                                                <li><a href="index-6.html"> Wind & Energy</a></li>
                                                <li><a href="index-7.html">Renewable & Energy</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="javascript:void(0)">
                                                Pages
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="javascript:void(0)">
                                                        Our Team
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="team.html">Our Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="javascript:void(0)">
                                                        Shop Page
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="shop.html">Shop Page</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="shop-cart.html">Shop Cart</a></li>
                                                        <li><a href="checkout.html">CheckOut</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="pricing.html">Pricing Plan</a></li>
                                                <li><a href="faq.html">Faqs</a></li>
                                                <li><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Services
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="service.html">Our Services</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Projects
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="project.html">Our Project</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                News
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="news.html">Our News</a></li>
                                                <li><a href="news-details.html">News Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-right d-flex justify-content-end align-items-center">
                        <a href="contact.html" className="theme-btn d-none d-xl-block">
                            Get In Touch
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                        <div className="header__hamburger my-auto d-xl-none">
                            <div className="sidebar__toggle">
                                <div className="header-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}