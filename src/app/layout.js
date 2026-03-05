"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import MouseCursor from "@/components/MouseCursor";
import Offcanvas from "@/components/Offcanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";


// export const metadata = {
//     title: "Suntech Website",
//     description: "Solar Techonology"
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Suntech</title>

            <link rel="icon" href="/assets/img/favicon.svg" />

            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/css/all.min.css"/>
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
            <link rel="stylesheet" href="/assets/css/meanmenu.css"/>
            <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css"/>
            <link rel="stylesheet" href="/assets/css/nice-select.css"/>
            <link rel="stylesheet" href="/assets/css/main.css"/>

        </head>

        <body>
        <Preloader />
        <BackToTop />
        <MouseCursor />
        <Offcanvas />
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        <ToastContainer position="top-right" />

            <script src="/assets/js/jquery-3.7.1.min.js"></script>
            <script src="/assets/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/js/gsap.min.js"></script>
            <script src="/assets/js/ScrollTrigger.min.js"></script>
            <script src="/assets/js/ScrollSmoother.min.js"></script>
            <script src="/assets/js/ScrollToPlugin.min.js"></script>
            <script src="/assets/js/SplitText.min.js"></script>
            <script src="/assets/js/TextPlugin.js"></script>
            <script src="/assets/js/jquery.nice-select.min.js"></script>
            <script src="/assets/js/jquery.waypoints.js"></script>
            <script src="/assets/js/jquery.counterup.min.js"></script>
            <script src="/assets/js/swiper-bundle.min.js"></script>
            <script src="/assets/js/jquery.meanmenu.min.js"></script>
            <script src="/assets/js/jquery.magnific-popup.min.js"></script>
            <script src="/assets/js/wow.min.js"></script>
            <script src="/assets/js/main.js"></script>
        </body>
        </html>
    );
}