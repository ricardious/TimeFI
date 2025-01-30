/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      spaceGrotesk: ['Space Grotesk', 'sans-serif'],
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        "errie-black": "#252525",
        "risd-blue": "#5b5af7",
        "cadet-gray": "#919eab",
        jet: "#2c2c2c",
      },
      animation: {
        one: 'one 10s infinite',
        two: 'two 10s infinite',

      },
      keyframes: {
        one: {
          '0%': { left: '0px', top: '0px' },
          '25%': { left: '-100px', top: '70px' },
          '50%': { left: '20px', top: '150px' },
          '75%': { left: '50px', top: '100px' },
          '100%': { left: '0px', top: '0px' },
        },
        two: {
          '0%': { left: '0px', top: '0px' },
          '25%': { left: '50px', top: '10px' },
          '50%': { left: '100px', top: '50px' },
          '75%': { left: '50px', top: '100px' },
          '100%': { left: '0px', top: '0px' },
        },
      },
      backgroundImage: {
        "grad-theme-135": "linear-gradient(135deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        navbar:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
    plugins: [],
  }
}
