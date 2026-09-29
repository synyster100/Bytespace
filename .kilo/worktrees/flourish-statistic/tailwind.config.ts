import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003BE2",
          lime: "#D4FB20",
          "lime-ring": "#CBFC01",
          white: "#FFFFFF",
          black: "#111111",
          bg: {
            testimonials: "#FAFAFA",
          },
          gray: {
            soft: "#F5F5F5",
            border: "#E5E5E5",
            muted: "#777777",
            50: "#F5F5F6",
            100: "#E5E6E8",
            200: "#CED0D3",
            400: "#82868E",
            950: "#242528",
          },
          black950: "#000000",
          black700: "#4F4F4F",
        },
      },
      fontFamily: {
        sans: [
          "Satoshi",
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Poppins",
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        logo: [
          "Clash Display",
          "Poppins",
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "hero-h1": [
          "72px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "hero-sub": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: "400",
          },
        ],
        "label-m": [
          "16px",
          {
            lineHeight: "120%",
            fontWeight: "500",
          },
        ],
        "body-m": [
          "16px",
          {
            lineHeight: "160%",
            fontWeight: "400",
          },
        ],
        "body-m-150": [
          "16px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-s": [
          "14px",
          {
            lineHeight: "160%",
            fontWeight: "400",
          },
        ],
        "label-l": [
          "18px",
          {
            lineHeight: "120%",
            fontWeight: "500",
          },
        ],
        "body-l": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: "400",
          },
        ],
        "body-xs": [
          "12px",
          {
            lineHeight: "160%",
            fontWeight: "400",
          },
        ],
        "progress-big": [
          "48px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "logo-text": [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],
        "heading-m": [
          "44px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "heading-xs": [
          "20px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "heading-xs-140": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
      },
      borderRadius: {
        pill: "9999px",
        card: "16px",
        panel: "20px",
        "search-input": "24px",
        testimonial: "24px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.06)",
        float: "0 8px 24px rgba(0, 0, 0, 0.12)",
        hero: "drop-shadow(51.0381px 72.9116px 72px rgba(0,0,0,0.13)) drop-shadow(37.1223px 53.0318px 56px rgba(0,0,0,0.105219)) drop-shadow(25.8381px 36.9115px 36px rgba(0,0,0,0.1)) drop-shadow(16.9463px 24.2089px 24px rgba(0,0,0,0.09)) drop-shadow(10.2076px 14.5823px 16.0875px rgba(0,0,0,0.08)) drop-shadow(5.38293px 7.6899px 9.57129px rgba(0,0,0,0.07)) drop-shadow(2.23292px 3.18988px 5.72344px rgba(0,0,0,0.06)) drop-shadow(0.518356px 0.740509px 3.03574px rgba(0,0,0,0.04))",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
