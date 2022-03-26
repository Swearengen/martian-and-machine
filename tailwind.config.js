module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#EF4059',
        dark: '#3D3D3D',
        darkgray: '#8E8E8E',
        gray: '#C7C7C7',
        lightgray: '#F5F5F5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
