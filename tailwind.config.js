/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    './homepage/*.js',
    './slideshow-page/*.js',
    '*.html',
    '*.js'
  ],
  theme: {
    screens: {
      'mobile':{'min':'12.5em', 'max':'26.6875em'},
      'tablet': {'min':'26.6875em', 'max':'48em'},
      'laptop':{'min':'48.125em'}
    },
    // colors:{},
    colors:{
      //primary colors
      'black':'#000',
      'white':'#fff',
      'boulder':'#7D7D7D',
      'mercury':'#E5E5E5',
      'concrete':'#F3F3F3'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant,addComponents,addBase}){
      addVariant("children","&>*");
      addBase()
    })
  ],
}

