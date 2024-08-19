/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
          backgroundImage: {
              lightningGradient: "linear-gradient(to top, #fcff7240 60%, #fcff7205);",
              radialYellow: "radial-gradient(circle, #fcff72, #f0f0f0)",
          },
          colors: {
              black: "#0d0d10",
              yellow: "#fcff72",
              white: "#ebebef",
              whiteTransparent: "#ffffff70",
              whiteTransparentBorder: "#ffffff5",
              green: "#123e2e",
              asideBg: "#141417",
              trBg: "#19191c",
              btnHover: "#202023",
              borderColor: "#363639",
              yellowBorderColor: "#d0d330",
              textLightGray: "#babac1",
              textDarkGray: "#7e808a",
          },
          screens: {
              sm: "769px",
          },
      },
  },
  plugins: [],
};
