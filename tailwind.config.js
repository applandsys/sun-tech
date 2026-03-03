/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], // covers all files inside src/

    theme: {
        extend: {
            animation: {
                floatSlow: "floatY 9s ease-in-out infinite",
            },
            keyframes: {
                floatY: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
            animationDelay: {
                3000: "3s",
            },
        },
    },

    plugins: [],

    corePlugins: {
        preflight: true, // keeps Tailwind's base reset
    },
}