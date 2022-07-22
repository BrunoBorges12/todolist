/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        blackToDoList: '#0D0D0D',
        grayToDoList100:'#454545',
        grayToDoList500:'#262626',
        grayToDoList400:'#333333',
        blueDark:'#1E6F9F',
        blueList:'#4EA8DE'
      },
      backgroundImage: {
        'add-task': "url('./public/Vector.png')",
      }
    },
  },
  plugins: [],
}
