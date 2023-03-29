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
      keyframes: {
        inactive: {
          '0%': { opacity: '1',  },
          '100%': { opacity: '0'},
        },
        active: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        inactive: 'inactive .1s linear alternate forwards',
        active: 'active .1s linear alternate forwards',
      },
      colors: {
        light: {
          bg: {"400":"", "500":"", "600":"", "700":"" },
          text: {"400":"", "500":"", "600":"", "700":"" },
          primary: {"50":"#eff6ff", "100":"#dbeafe", "200":"#bfdbfe", "300":"#93c5fd", "400":"#60a5fa", "500":"#3b82f6", "600":"#2563eb", "700":"#1d4ed8", "800":"#1e40af", "900":"#1e3a8a"},
          secondary: {"600":"#d8d8d8", "700":"#c0c0c0"}
        },
        dark: {
          bg: {"400":"", "500":"", "600":"", "700":"#374151", "800":"#1f2937", "900":"#111827" },
          text: {"100":"#F3F4F6", "200":"#E5E7EB", "300":"#D1D5DB", "400":"#9ca3af", "500":"", "600":"#2563eb", "700":"" },
          primary: {"50":"#eff6ff", "100":"#dbeafe", "200":"#bfdbfe", "300":"#93c5fd", "400":"#60a5fa", "500":"#3b82f6", "600":"#2563eb", "700":"#1d4ed8", "800":"#1e40af", "900":"#1e3a8a"},
          secondary: {"600":"#d8d8d8", "700":"#c0c0c0"}
        },
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
