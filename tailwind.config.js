module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:'Poppins',
        headings:'Vidaloka'
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT:"1rem",
        sm:"4rem",
        lg:"2rem",
        xl:"3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
