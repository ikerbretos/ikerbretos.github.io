/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E63946', // Vibrant Red
                secondary: '#F1FAEE', // Off-White
                bg: '#050505', // Rich Black (Dark Mode)
                'bg-light': '#121212', // Off-Black (Cards - Dark Mode)
                text: '#A3A3A3', // Silver Gray
                'text-dim': '#737373', // Darker Gray

                // Light Mode Colors (configured via CSS variables usually, but keeping palette simple for now)
                'light-bg': '#FFFFFF',
                'light-text': '#1D3557',
            },
            fontFamily: {
                sans: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
                mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
