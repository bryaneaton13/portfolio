module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'move-bg': {
          to: { backgroundPosition: '400% 0' },
        },
      },
      animation: {
        'move-bg': 'move-bg 15s infinite linear',
      },
    },
  },
  plugins: [],
};
