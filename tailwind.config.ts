import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#020c1b",
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "navy-shadow": "rgba(2, 12, 27, 0.7)",
        "dark-slate": "#495670",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        "green-tint": "rgba(100, 255, 218, 0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
