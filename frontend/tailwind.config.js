/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
	// eslint-disable-next-line no-undef
  plugins: [
    require('daisyui'),
  ],
}