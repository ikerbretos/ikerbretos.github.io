/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#D4AF37', // Metallic Gold
                secondary: '#E5E5E5', // Platinum/White
                bg: '#050505', // Rich Black
                'bg-light': '#121212', // Off-Black (Cards)
                text: '#A3A3A3', // Silver Gray
                'text-dim': '#737373', // Darker Gray
                panel: 'rgba(255, 255, 255, 0.03)',
            },
            fontFamily: {
                sans: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
                mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
