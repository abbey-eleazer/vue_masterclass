/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans, sans serif'],
      },
      colors: {
        'brandGray-1' : '#dadce0',
        'brandGray-2' : '#f8f9fa',
        'brandGray-3' : '#80868b',
        'brandBlue-1' : '#1967d2',
        'brandBlue-2' : '#4285f4',
        'brandGreen-1' : '#137333'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      }
    },
  },
  plugins: [],
}

