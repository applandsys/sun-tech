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
                                        <li className="menu-thumb">
                                            <Link href="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li className="menu-thumb">
                                            <Link href="/our-team">
                                                Our Team
                                            </Link>
                                        </li>
                                        <li className="menu-thumb">
                                            <Link href="/service">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="menu-thumb">
                                            <Link href="/pricing">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="menu-thumb">
                                            <Link href="/news">
                                                News
                                            </Link>
                                        </li>
                                        <li className="menu-thumb">
                                            <Link href="/faq">
                                                FAQ
                                            </Link>
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