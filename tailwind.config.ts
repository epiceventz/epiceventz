import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#050608",
        graphite: "#11141a",
        steel: "#1c2430",
        gold: "#d7aa43",
        "gold-soft": "#f1d58a",
        electric: "#29a9ff"
      },
      boxShadow: {
        glow: "0 0 45px rgba(41, 169, 255, 0.18)",
        gold: "0 0 34px rgba(215, 170, 67, 0.18)"
      },
      backgroundImage: {
        "radial-stage":
          "radial-gradient(circle at 20% 20%, rgba(41,169,255,.18), transparent 34%), radial-gradient(circle at 78% 15%, rgba(215,170,67,.13), transparent 28%), linear-gradient(135deg, #050608 0%, #11141a 48%, #07090d 100%)"
      }
    }
  },
  plugins: []
};

export default config;
