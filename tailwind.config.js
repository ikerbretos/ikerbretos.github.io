/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#64ffda', // Neon Mint
                secondary: '#ccd6f6', // Lightest Slate (Headings)
                bg: '#0a192f', // Dark Navy
                'bg-light': '#112240', // Light Navy (Cards)
                text: '#8892b0', // Slate (Body)
                'text-dim': '#a8b2d1', // Light Slate
                panel: 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
                mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
