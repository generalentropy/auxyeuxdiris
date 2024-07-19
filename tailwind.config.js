import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}", "./config/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: "#132136",
        primaryLighter: "#2B4773",
        accent: "#F9AD19",
        accentDarker: "#DE9B17",
        lightGrey: "#EDEDED",
        greyDark: "#C2C5C9",
        greyDarker: "#C2C5C9",
      },

      filter: {
        "blue-tint":
          "blur(0) brightness(1) saturate(1.2) sepia(1) hue-rotate(200deg)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
