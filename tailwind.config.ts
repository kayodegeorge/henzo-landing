import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          "black": "#181F18",
          "grey":"#8B8F9A",
          "green": "#7BF1794D"
        }
      }
    },
  },
  plugins: [],
};
export default config;
