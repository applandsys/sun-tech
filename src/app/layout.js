// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/assets/scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Preloader from "@/components/Preloader"; // Add this import
import 'animate.css';
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";
import MouseCursor from "@/components/MouseCursor";
import Offcanvas from "@/components/Offcanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Suntech Website",
    description: "Solar Techonology"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>

            <link rel="icon" href="/assets/img/favicon.svg" />

            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/css/all.min.css"/>
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
            <link rel="stylesheet" href="/assets/css/meanmenu.css"/>
            <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css"/>
            <link rel="stylesheet" href="/assets/css/nice-select.css"/>
            <link rel="stylesheet" href="/assets/css/main.css"/>
            <title>Suntech</title>

        </head>

        <body>
        <Preloader />
        <BackToTop />
        <MouseCursor />
        <Offcanvas />
        <Header />
        {children}
        <Footer />
        <ToastContainer position="top-right" />
        </body>
        </html>
    );
}