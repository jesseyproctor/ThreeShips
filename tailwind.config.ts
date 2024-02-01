import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    tooltipArrows: (theme: (arg0: string) => any) => ({
      'danger-arrow': {
          borderColor: theme('colors.green.500'),
          borderWidth: 1,
          backgroundColor: theme('colors.white'),
          size: 10,
          offset: 10
      },
  }),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-tooltip-arrow-after')()
  ],
};
export default config;
