'use client';

import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setIsLoading(false);

        // If page is already loaded
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        // Maximum 3 seconds fallback
        const timeout = setTimeout(() => setIsLoading(false), 3000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    // Hide preloader when done
    if (!isLoading) return null;

    return (
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                {/* Spinner */}
                <div className="spinner" />

                {/* SUNTECH Text Animation */}
                <div className="txt-loading">
                    <span data-text-preloader="S" className="letters-loading">S</span>
                    <span data-text-preloader="U" className="letters-loading">U</span>
                    <span data-text-preloader="N" className="letters-loading">N</span>
                    <span data-text-preloader="T" className="letters-loading">T</span>
                    <span data-text-preloader="E" className="letters-loading">E</span>
                    <span data-text-preloader="C" className="letters-loading">C</span>
                    <span data-text-preloader="H" className="letters-loading">H</span>
                </div>

                <p className="text-center">Loading</p>
            </div>

            {/* Bottom Bar Loader */}
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg" />
                    </div>
                </div>
            </div>
        </div>
    );
}