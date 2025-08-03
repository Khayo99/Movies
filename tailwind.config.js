/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2EADEC',
        textColor: '#1E1E1E',
        borderColor: '#D9D9D9',
        red: '#E53A3A',
        background: '#F6F6F6',

      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        light: ['Poppins-Light', 'sans-serif'],
        regular: ['Poppins-Regular', 'sans-serif'],
        medium: ['Poppins-Medium', 'sans-serif'],
        semiBold: ['Poppins-SemiBold', 'sans-serif'],
        bold: ['Poppins-Bold', 'sans-serif'],
        black: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
