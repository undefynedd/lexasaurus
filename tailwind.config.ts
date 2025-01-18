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
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "midground": "var(--midground)",
	"primary": "var(--primary)",
	"secondary": "var(--secondary)",
	"primary-fg": "var(--primary-fg)",
	"secondary-fg": "var(--secondary-fg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
