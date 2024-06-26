/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      spacing:
      {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors:
      {
        'primary-yellow': 'hsl(47, 88%, 63%)',
        'secondary-white': 'hsl(0, 0%, 100%)',
        'secondary-grey': 'hsl(0, 0%, 50%)',
        'secondary-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily:
      {
        Figtree : ['Figtree'],
        FigtreeItalic : ['Figtree-Italic']
      },
    },
  },
  plugins: [],
}

