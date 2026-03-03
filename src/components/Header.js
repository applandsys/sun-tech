import Link from 'next/link';

export default function Header() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="mega-menu-wrapper">
                <div className="header-main">
                    <div className="header-left">
                        <Link href="/" className="header-logo">
                            <img src="/assets/img/logo/black-logo.png" alt="Logo" style={{ maxWidth: "160px", width: "100%", height: "auto" }} />
                        </Link>
                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className=" menu-thumb">
                                            <Link href="/">Home </Link>
                                        </li>
                                        <li className="d-xl-none">
                                            <Link href="/about" className="border-none">About</Link>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><Link href="/about">About Us</Link></li>
                                                <li className="has-dropdown">
                                                    <a href="#">Our Team <i className="fas fa-angle-right"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link href="/team">Our Team</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="#">Shop Page <i className="fas fa-angle-right"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop">Shop Page</Link></li>
                                                        <li><Link href="/shop-details">Shop Details</Link></li>
                                                        <li><Link href="/shop-cart">Shop Cart</Link></li>
                                                        <li><Link href="/checkout">CheckOut</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/pricing">Pricing Plan</Link></li>
                                                <li><Link href="/faq">Faqs</Link></li>
                                                <li><Link href="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Services <i className="fas fa-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><Link href="/service">Our Services</Link></li>
                                                <li><Link href="/service-details">Service Details</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Projects <i className="fas fa-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><Link href="/project">Our Project</Link></li>
                                                <li><Link href="/project-details">Project Details</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">News <i className="fas fa-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><Link href="/news">Our News</Link></li>
                                                <li><Link href="/news-details">News Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                        <Link href="/contact" className="theme-btn d-none d-xl-block">
                            Get In Touch <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                        <div className="header__hamburger my-auto d-xl-none">
                            <div className="sidebar__toggle">
                                <div className="header-bar">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}