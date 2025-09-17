module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      textShadow: {
        "green-glow": "0 0 18px #66bb6a",
      },
    },
  },
  plugins: [],
};
