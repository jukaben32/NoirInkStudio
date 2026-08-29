import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Black & Beige Fine-Art Gallery system: warm parchment surfaces, a
      // muted-gold brand accent, and an editorial serif/sans pairing (Fraunces
      // + Inter). Sharp corners (borderRadius below) reinforce the gallery/
      // print-registration feel instead of a soft SaaS default.
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        brand: {
          50:  "#faf6ee",
          100: "#f1e4c9",
          200: "#e4cf9f",
          300: "#d3b374",
          400: "#c19f5f",
          500: "#b08d57",
          600: "#8a6b3e",
          700: "#6e5432",
          800: "#4f3c25",
          900: "#38291a",
          950: "#241a11",
        },
        accent: {
          50:  "#faf6ee",
          100: "#f1e4c9",
          200: "#e4cf9f",
          300: "#d3b374",
          400: "#c19f5f",
          500: "#b08d57",
          600: "#8a6b3e",
          700: "#6e5432",
        },
        surface: {
          50:  "#fffdf9",
          100: "#f4ecdf",
          200: "#ebe0cc",
          300: "#d9cbaf",
          400: "#a89880",
          500: "#6b6053",
          600: "#4a4238",
          700: "#332d26",
          800: "#241f1a",
          900: "#1c1712",
        },
      },
      borderRadius: {
        DEFAULT: "0px",
        sm:  "0px",
        md:  "0px",
        lg:  "0px",
        xl:  "0px",
        "2xl": "0px",
        "3xl": "0px",
      },
      boxShadow: {
        xs:       "1px 1px 0 0 rgb(176 141 87 / 0.14)",
        soft:     "2px 2px 0 0 rgb(217 203 175 / 1)",
        card:     "2px 2px 0 0 rgb(217 203 175 / 1)",
        elevated: "3px 3px 0 0 rgb(217 203 175 / 1)",
        "glow-teal":    "2px 2px 0 0 rgb(176 141 87 / 1)",
        "glow-teal-lg": "3px 3px 0 0 rgb(176 141 87 / 1)",
        "glow-green":   "0 0 0 2px rgb(176 141 87 / 0.2)",
        "inner-teal":   "inset 0 1px 0 rgb(176 141 87 / 0.12)",
        dropdown: "2px 2px 0 0 rgb(217 203 175 / 1)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":  "spin 3s linear infinite",
        "wave":       "wave 1.2s ease-in-out infinite",
        "glow":       "glow 2s ease-in-out infinite",
        "float":      "float 6s ease-in-out infinite",
        "slide-in":   "slideIn 0.25s ease-out",
        "fade-up":    "fadeUp 0.35s ease-out both",
        "shimmer":    "shimmer 1.6s linear infinite",
        "pop-in":     "popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        wave:   { "0%, 100%": { transform: "scaleY(1)" },   "50%": { transform: "scaleY(2)" } },
        glow:   { "0%, 100%": { boxShadow: "0 0 20px rgb(176 141 87 / 0.2)" }, "50%": { boxShadow: "0 0 36px rgb(176 141 87 / 0.45)" } },
        float:  { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        slideIn:{ from: { opacity: "0", transform: "translateX(-6px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        shimmer:{ "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        popIn:  { from: { opacity: "0", transform: "scale(0.92)" }, to: { opacity: "1", transform: "scale(1)" } },
      },
      backdropBlur: { xs: "2px" },
      spacing: { "62": "15.5rem", "72": "18rem" },
    },
  },
  plugins: [],
};

export default config;
