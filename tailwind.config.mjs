/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    sans: ["Satoshi", "ui-sans-serif", "system-ui"],
    serif: ["Lora", "ui-serif", "Georgia"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
