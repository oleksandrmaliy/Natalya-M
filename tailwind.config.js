/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vibes: ['Great Vibes', 'cursive'],
        poiret: ['Poiret One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: 'true', // Центрує контейнер
        // padding: '1rem', // Додає внутрішні відступи
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        redcolor: '#D88E73',
        greencolor: '#2E936A',
        bluecolor: '#81BEC5',
        forevercolor: '#93D1C1',
        backcolor: '#D5DCDE',
        browncolor: '#D5DCDE',
        yellowcolor: '#fef08a',
      },
      boxShadow: {
        'custom-green': '5px 5px 10px #22c55e',
        'all-yellow': '0 0 16px 16px #fef08a',
        'all-green': '0 0 16px 8px #2E936A',
      },
    },
  },
  plugins: [],
};
