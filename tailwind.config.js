/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    boxShadow: {
      'mobileNav': '0px 5rem 0px 5rem #0a0a0a',
      'mobileNavDark' : '0px 5rem 0px 5rem #0a0a0a'
    },
    extend: {
      height: {
        'big': '70vh',
      },
      fontFamily: {
        sans: ['var(--maven-font)']
      },
      colors: {
        'primary' : "#161616",
        'secondary' : "#1a1a1a",
        'tertiary' : "#b1b1b1",
        'light': '#e5e9ec',
        'dark' : '#0a0a0a',
        'highlight': '#eab308',
        'text-primary' : '#545454',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}

