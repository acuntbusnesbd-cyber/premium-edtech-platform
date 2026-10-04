module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b9dcff',
          300: '#81c1ff',
          400: '#4ea2ff',
          500: '#2a7ef7',
          600: '#1d66d8',
          700: '#1e53af',
          800: '#1d467f',
          900: '#1d3d69'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
