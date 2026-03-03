// components/Preloader.js
'use client';

import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for the page to fully load
        const handleLoad = () => {
            setIsLoading(false);
        };

        // Check if the page is already loaded
        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Fallback: hide after 3 seconds maximum
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="E" className="letters-loading">E</span>
                    <span data-text-preloader="C" className="letters-loading">C</span>
                    <span data-text-preloader="O" className="letters-loading">O</span>
                    <span data-text-preloader="L" className="letters-loading">L</span>
                    <span data-text-preloader="Y" className="letters-loading">Y</span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`col-3 loader-section ${i < 2 ? "section-left" : "section-right"}`}>
                            <div className="bg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}