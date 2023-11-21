const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bricolage Grotesque Variable", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        navbar: 100,
      },
      maxWidth: {
        blog: "65ch",
      },
      boxShadow: {
        // Moderate shadow with a pink hue
        box: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 8px 16px 0 rgba(0, 0, 0, 0.05), 0 16px 32px 0 rgba(0, 0, 0, 0.05), 0 32px 64px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  safelist: ["bg-green-500", "bg-indigo-500", "bg-pink-500"],
  plugins: [require("@tailwindcss/typography")],
};
