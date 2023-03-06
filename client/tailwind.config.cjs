/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff", "100":"#dbeafe", "200":"#bfdbfe", "300":"#93c5fd", "400":"#60a5fa", "500":"#3b82f6", "600":"#2563eb", "700":"#1d4ed8", "800":"#1e40af", "900":"#1e3a8a"},
        secondary: {"600":"#d8d8d8", "700":"#c0c0c0"}
      }
    },
    fontFamily: {
      'body': [
      'Merriweather'
    ],
      'sans': [
      'Merriweather'
    ]
  }},
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
}
