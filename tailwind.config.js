/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to style your App.jsx and components
  ],
  theme: {
    extend: {
      colors: {
        // The exact neon green from your reference images
        cyber: '#00ff41',
        dark: '#050505',
      },
      fontFamily: {
        // Mapping the fonts we imported in your index.css
        mono: ['"Space Mono"', 'monospace'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
      animation: {
        // Adding a slow pulse for the "Analyzing" state
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}