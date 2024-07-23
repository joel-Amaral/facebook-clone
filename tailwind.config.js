/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors:{
      'blue-face': '#1877f2',
      'blue-soft': '#f0f2f5',
    },
    spacing: {
      '580': '580px',
      '380': '380px',
      'green-face': '#36A420',
    }
  },
  },
  plugins: [],
}

