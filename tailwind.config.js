module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        martianRed: '#EF4059',
        martianDark: '#3D3D3D',
        martianDarkgray: '#8E8E8E',
        martianGray: '#C7C7C7',
        martianLightgray: '#F5F5F5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
