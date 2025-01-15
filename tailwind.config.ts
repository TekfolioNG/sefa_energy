import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans], // Default fallback
        montserrat: ['Montserrat', 'sans-serif'],
      
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      spacing: {
        '13': '3.25rem', // Adds a custom spacing value
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      const newNegativeMargins = {
        '.-mt-13': {
          marginTop: '-3.25rem',
        },
        // Add other negative margins as needed
      };
      addUtilities(newNegativeMargins, ['responsive', 'hover']);
    }),
  ],
} as Config
