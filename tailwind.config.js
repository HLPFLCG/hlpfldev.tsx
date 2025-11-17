/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c87941',
        'primary-light': '#e09560',
        accent: '#2c5f6f',
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
        text: '#ffffff',
        'text-muted': '#a0a0a0',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.5s ease forwards',
        'bounce': 'bounce 0.6s ease',
        'logo-float': 'logoFloat 3s ease-in-out infinite',
        'logo-pulse': 'logoPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(-3rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-0.625rem)',
          },
        },
        logoFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        logoPulse: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 30px rgba(200, 121, 65, 0.5))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 50px rgba(200, 121, 65, 0.8))',
          },
        },
      },
    },
  },
  plugins: [],
};