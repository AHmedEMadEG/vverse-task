import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #1a1a1a, #1a4c95 20%, #8b2f6b 50%, #ef0505)",
        "text-gradient":
          "linear-gradient(45deg, #1a1a1a, #1a4c95 20%, #8b2f6b 50%, #ef0505)",
      },
      colors: {
        secondary: "#1a4c95",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
