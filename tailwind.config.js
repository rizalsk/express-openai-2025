module.exports = {
  content: [
    './src/**/*.{html,js}',    // Make sure Tailwind scans these files
    './public/**/*.{html,js}', // If you have files here as well
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),  // For form styles
  ],
};
