/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1120",
          light: "#1a237e",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
        "maabit-blue": "#0099FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to bottom right, #0B1120, #1a237e)",
      },
    },
  },
  plugins: [],
};
