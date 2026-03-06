import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import MouseCursor from "@/components/MouseCursor";
import Offcanvas from "@/components/Offcanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ClientAnimations from "@/components/ClientAnimations";
import Cta from "@/components/Cta";
import News from "@/components/News";
import FooterTwo from "@/components/FooterTwo";

export const metadata = {
    title: "Suntech Website",
    description: "Solar Technology - Renewable Energy Solutions",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/assets/img/favicon.svg" />
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/all.min.css" />
            <link rel="stylesheet" href="/assets/css/animate.css" />
            <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
            <link rel="stylesheet" href="/assets/css/meanmenu.css" />
            <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
            <link rel="stylesheet" href="/assets/css/nice-select.css" />
            <link rel="stylesheet" href="/assets/css/main.css" />
        </head>
        <body suppressHydrationWarning={true}>
        <ClientAnimations>
        <Preloader />
        <BackToTop />
        <MouseCursor />
        <Offcanvas />
        <Header />
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main>
                    {children}
                   <Footer/>
                </main>
            </div>
        </div>
        <ToastContainer position="top-right" />
        </ClientAnimations>
        </body>
        </html>
    );
}