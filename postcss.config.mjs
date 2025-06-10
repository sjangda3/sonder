import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      // Content section - specifies which files to scan for class usage
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
      ],
      // Custom plugin for background dots
      plugins: [
        function (api) {
          const { matchUtilities, theme } = api;
          matchUtilities(
            {
              "bg-dot": (value) => ({
                backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                )}")`,
              }),
            },
            { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
          );
        }
      ]
    }]
  ],
};

export default config;
