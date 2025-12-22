/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class", // ← Esto es lo que faltaba
  theme: {
    extend: {},
  },
  plugins: [],
};
