// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-80px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 0.8s ease-out forwards',
      },
    },
  },
};