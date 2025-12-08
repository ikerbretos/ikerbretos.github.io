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
                primary: 'var(--color-primary)', // #E63946
                secondary: 'var(--color-secondary)', // Text Headings
                bg: 'var(--color-bg)', // Main Background
                'bg-light': 'var(--color-bg-light)', // Card Background
                text: 'var(--color-text)', // Body Text
                'text-dim': 'var(--color-text-dim)', // Muted Text
            },
            fontFamily: {
                sans: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
                mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
