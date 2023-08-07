/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      screens:{
          xsm : {'max': '500px'},
      },


      fontFamily:{
        body : 'Smythe',
        btn: 'Jost'
      },

      colors: {
        lineCol : '#D2D2D2',
        font2nd: '#8B8B8B',
        btn: '#16DB99'
      }

    },
  },
  plugins: [],
}

