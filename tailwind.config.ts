import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        Inder: ['Inder', 'sans-serif'],
        PassionOne: ['Passion One','sans-serif'],
        Poppins: ["Poppins", 'sans-serif'],
        
      },
    },
  },
  plugins: [],
} satisfies Config;
