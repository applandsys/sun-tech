// components/ClientAnimations.jsx
"use client";

import { useEffect } from 'react';

export default function ClientAnimations({ children }) {
    useEffect(() => {
        const loadScripts = async () => {
             await loadScript('/assets/js/jquery-3.7.1.min.js');
             await loadScript('/assets/js/bootstrap.bundle.min.js');
             await loadScript('/assets/js/gsap.min.js');
             await loadScript('/assets/js/ScrollTrigger.min.js');
             await loadScript('/assets/js/ScrollSmoother.min.js');
             await loadScript('/assets/js/ScrollToPlugin.min.js');
             await loadScript('/assets/js/SplitText.min.js');
             await loadScript('/assets/js/TextPlugin.js');
             await loadScript('/assets/js/jquery.nice-select.min.js');
             await loadScript('/assets/js/jquery.waypoints.js'); // needed for counterup
            await loadScript('/assets/js/jquery.counterup.min.js');
             await loadScript('/assets/js/swiper-bundle.min.js');
             await loadScript('/assets/js/jquery.meanmenu.min.js');
             await loadScript('/assets/js/jquery.magnific-popup.min.js');
             await loadScript('/assets/js/wow.min.js');

            // 3. Initialize plugins
            if (window.WOW) {
                new window.WOW().init();
            }

            if (window.$ && $.fn.counterUp) {
                $('.count').counterUp({ delay: 10, time: 1000 });
            }

            // 4. Finally, load your custom main.js (which may depend on above)
            await loadScript('/assets/js/main.js');
        };

        loadScripts();
    }, []);

    // Helper to load a script and return a promise
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false; // ensure order
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    return <>{children}</>;
}