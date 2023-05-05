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

      addComponents({
        '.year-text':{
          fontWeight:'700',
          fontSize:'12.5rem',
          lineHeight:'9.375rem',
        },

        '.subhead1':{
          fontSize:'0.9375rem',
          lineHeight:'1.1875rem',
        }
      });

      addBase({
        'h1':{
          fontSize:'3.5rem',
          lineHeight:'4rem',
        },

        'h2':{
          fontSize:'1.5rem',
          lineHeight:'1.8125rem',
        },

        'h3':{
          fontSize:'1.125rem',
          lineHeight:'1.375rem'
        }
      });
    })
  ],
}

