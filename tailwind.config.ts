import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:  {
	"display": ["Passion One", "sans-serif"]
    },
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
  plugins: [
    plugin(({ addVariant, addUtilities, matchVariant }) => {
        // Hover media queries
        addVariant("has-hover", "@media (hover: hover) and (pointer: fine)")
        addVariant("no-hover", "@media not all and (hover: hover) and (pointer: fine)")

        // Applied on hover if supported, never applied otherwise
        addVariant("hover-never", "@media (hover: hover) and (pointer: fine) { &:hover }")
        matchVariant(
            "group-hover-never",
            (_, { modifier }) => `@media (hover: hover) and (pointer: fine) { :merge(.group${modifier ? "\\/" + modifier : ""}):hover & }`,
            { values: { DEFAULT: "" } },
        )
        matchVariant(
            "peer-hover-never",
            (_, { modifier }) => `@media (hover: hover) and (pointer: fine) { :merge(.peer${modifier ? "\\/" + modifier : ""}):hover & }`,
            { values: { DEFAULT: "" } },
        )

        // Applied on hover if supported, always applied otherwise
        addVariant("hover-always", [
            "@media (hover: hover) and (pointer: fine) { &:hover }",
            "@media not all and (hover: hover) and (pointer: fine)",
        ])
        matchVariant(
            "group-hover-always",
            (_, { modifier }) => [
                `@media (hover: hover) and (pointer: fine) { :merge(.group${modifier ? "\\/" + modifier : ""}):hover & }`,
                "@media not all and (hover: hover) and (pointer: fine)",
            ],
            { values: { DEFAULT: "" } },
        )
        matchVariant(
            "peer-hover-always",
            (_, { modifier }) => [
                `@media (hover: hover) and (pointer: fine) { :merge(.peer${modifier ? "\\/" + modifier : ""}):hover & }`,
                "@media not all and (hover: hover) and (pointer: fine)",
            ],
            { values: { DEFAULT: "" } },
        )
    }),
  ],
} satisfies Config;
