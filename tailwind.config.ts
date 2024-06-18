import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#2500FF",
      white: "#fff",
      gray: "#FAFBFC",
      graybold: "#808080",
      text: "#151D48",
      orangeLigth: "#fffaf1",
      redLigth: "#ffe2e5",
      red: "#fa5a7d",
      yellowLigth: "#fff4de",
      yellow: "#ff947a",
      greenLigth: "#dcfce7",
      green: "#3cd856",
      purpleLigth: "#f3e8ff",
      purple: "#bf83ff",
    },
    extend: {
      backgroundImage: {
        "card-side": "url('/card-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
