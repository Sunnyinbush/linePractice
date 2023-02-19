/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        'krd' : 'rgba(239, 125, 82, 1)',
        'box' : ' rgba(255, 249, 228, 1)'

      },
    },
  },
  plugins: [],
}
