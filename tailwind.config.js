/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx, js}'],
  theme: {
    extend: {
      colors: {
        'white-three': '#e8e8e8',
        'azure': '#0290ff',
        'white-two': '#fff',
        'buble-pink': '#ff5ab7',
        'pink-grey': '#c7c7c7',
        'light-pink': '#c4c4c4',
        'pale-grey': '#f5f6fa',
        'medium-blue': '#307bbe',
        'black-5': 'rgba(0, 0, 0, 0.05);'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['RobotoSlab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
