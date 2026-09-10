/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper canvas
        ivory: {
          50: '#FBF9F5',
          100: '#F7F4ED',
          200: '#F1EBDE',
          300: '#E8E0CD',
          400: '#E0D8C6',
        },
        // Deep navy ink
        navy: {
          500: '#2E4670',
          600: '#22385C',
          700: '#1B2C49',
          800: '#14243F',
          900: '#0E1A2E',
          950: '#080F1C',
        },
        // Muted gold accent
        gold: {
          300: '#D8C48A',
          400: '#C4A659',
          500: '#A8842C',
          600: '#8A6C22',
        },
        // Warm greys for body copy
        stone: {
          400: '#8A8271',
          500: '#6B6558',
          600: '#544F45',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        heading: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'paper': '0 1px 2px rgba(20, 36, 63, 0.04), 0 8px 24px -12px rgba(20, 36, 63, 0.10)',
        'paper-lg': '0 2px 4px rgba(20, 36, 63, 0.04), 0 20px 48px -20px rgba(20, 36, 63, 0.16)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
