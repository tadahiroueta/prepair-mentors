/** @type {import('tailwindcss').Config} */

const defaultTheme = require( "tailwindcss/defaultTheme" )

module.exports = {
  content: [ "./src/**/*.js" ],
  theme: { extend: { 
    fontFamily: { sans: [ "Roboto", ...defaultTheme.fontFamily.sans ]},
    colors: { 
      violet: {
        100: "#bda3ff",
        200: "#9e3ffd",
        300: "#692aa9",
        400: "#522faa",
        500: "#4f0bc2",
        700: "#4a0c84",
        800: "#291755"
      },
      beige: "#e7e7e6"
    }
}}}