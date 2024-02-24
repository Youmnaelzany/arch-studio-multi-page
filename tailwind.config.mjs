/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1441px",
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/home/mobile/image-hero-paramour.jpg')",
        "hero-bg-md": "url('/assets/home/tablet/image-hero-paramour.jpg')",
        "hero-bg-lg": "url('/assets/home/desktop/image-hero-paramour.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
