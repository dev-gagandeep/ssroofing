/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3FA9F5',
          dark: '#0f6eb0',
          light: '#d8efff'
        },
        ink: '#0f172a'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.10)'
      },
      backgroundImage: {
        'hero-pattern':
          'radial-gradient(circle at top left, rgba(63, 169, 245, 0.35), transparent 30%), radial-gradient(circle at bottom right, rgba(15, 110, 176, 0.25), transparent 35%)'
      }
    }
  },
  plugins: []
};
