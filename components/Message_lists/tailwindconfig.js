/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "neutral-white": "#fff",
          black: "#000",
          gray: {
            "100": "#1f1d1d",
            "200": "#121111",
            "300": "rgba(31, 29, 29, 0.5)",
            "400": "rgba(0, 0, 0, 0.5)",
            "500": "rgba(255, 255, 255, 0.15)",
            "600": "rgba(0, 0, 0, 0.27)",
          },
          gainsboro: {
            "100": "#d9d9d9",
            "200": "rgba(234, 231, 231, 0.5)",
          },
          "primary-default": "#5f2eea",
          "grayscale-off-white": "#fcfcfc",
          "neutral-off-white": "#f7f7fc",
          "neutral-line": "#ededed",
          "neutral-disabled": "#adb5bd",
          silver: "rgba(208, 186, 186, 0.5)",
          "accent-success": "#2cc069",
          "neutral-active": "#0f1828",
        },
        spacing: {},
        fontFamily: {
          "crimson-text": "'Crimson Text'",
          "body-01": "Mulish",
        },
        borderRadius: {
          mini: "15px",
          lg: "18px",
          "3xs": "10px",
        },
      },
      fontSize: {
        "2xl": "21px",
        "9xl": "28px",
        "16xl": "35px",
        sm: "14px",
        "4xl": "23px",
        "3xl": "22px",
        "26xl": "45px",
        xs: "12px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  