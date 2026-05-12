/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'japan-system-primary': '#1E3A5F',
        'japan-system-secondary': '#4DA8DA',
        'japan-system-bg': '#F5F7FA',
        'japan-system-text': '#111111',
        'luxury-white': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
