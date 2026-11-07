import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F5F0",
          50: "#FAF9F5",
          100: "#F7F5F0",
          200: "#EFECE3",
          300: "#E5E1D3",
        },
        forest: {
          DEFAULT: "#183A34",
          50: "#E8EFEB",
          100: "#C6D8CE",
          200: "#8FAFA0",
          300: "#578672",
          400: "#325C4D",
          500: "#183A34", // Brand deep forest
          600: "#142F2A",
          700: "#0F2420",
          800: "#0A1816",
          900: "#050C0B",
        },
        coral: {
          DEFAULT: "#E56B5D",
          50: "#FDF1EF",
          100: "#FBE1DC",
          200: "#F6C1B8",
          300: "#F1A094",
          400: "#EB8070",
          500: "#E56B5D", // Accent soft coral
          600: "#D34E3F",
          700: "#AC3629",
          800: "#852A20",
          900: "#5E1D16",
        },
        sage: {
          DEFAULT: "#DCE8DF",
          50: "#F5F8F6",
          100: "#EBF1EC",
          200: "#DCE8DF", // Soft sage
          300: "#C2D5C8",
          400: "#A4BFAD",
          500: "#83A68F",
        },
        charcoal: {
          DEFAULT: "#26302D",
          text: "#26302D",
          muted: "#6F7975",
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(24, 58, 52, 0.06), 0 2px 6px -1px rgba(24, 58, 52, 0.04)',
        'elevated': '0 12px 32px -4px rgba(24, 58, 52, 0.1), 0 4px 12px -2px rgba(24, 58, 52, 0.05)',
        'coral': '0 8px 24px -4px rgba(229, 107, 93, 0.35)',
      }
    },
  },
  plugins: [],
};
export default config;
