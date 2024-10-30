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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        chocolates: ["TT Chocolates Trl", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          // 2xl is intentionally omitted here
        },
      },
    },
  },
  plugins: [],
};
export default config;

// module.exports = {
//   theme: {
//     extend: {},
//     container: {
//       center: true,
//       padding: '1rem',
//       screens: {
//         sm: '640px',
//         md: '768px',
//         lg: '1024px',
//         xl: '1280px',
//         // 2xl is intentionally omitted here
//       },
//     },
//   },
//   plugins: [],
// };
