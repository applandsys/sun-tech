import Link from 'next/link';

export default function Header() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="mega-menu-wrapper">
                <div className="header-main">
                    <div className="header-left">
                        <Link href="/" className="header-logo">
                            <img src="assets/img/logo/black-logo.png" alt="Logo"
                                 style={
                                            {
                                                maxWidth:'160px',
                                                width:'100%',
                                                height:'auto' + ''}
                                        }/>
                        </Link>
                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="menu-thumb">
                                            <Link href="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="has-dropdown active d-xl-none">
                                            <Link href="/about" className="border-none">
                                                About
                                            </Link>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="javascript:void(0)">
                                                About
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/about">About Us</Link>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="javascript:void(0)">
                                                        Our Team
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="/">Our Team</a></li>
                                                        <li><a href="/">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/">Pricing Plan</a></li>
                                                <li><a href="/">Faqs</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Services
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="/">Our Services</a></li>
                                                <li><a href="/">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Projects
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="/">Our Project</a></li>
                                                <li><a href="/">Project Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                News
                                                <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="/">Our News</a></li>
                                                <li><a href="/">News Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/contact">
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