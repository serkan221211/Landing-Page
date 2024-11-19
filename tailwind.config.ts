import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOne: "#78350F",
        customTwo: "#FFFBEB",
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "3.5xl": "32px",
      },
      padding: {
        "0.75": "3px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
