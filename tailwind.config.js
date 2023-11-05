/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

/*
Exemplo de como configurar com css estilizado

// tailwind.config.js

module.exports = {
  purge: [],
  darkMode: false, // ou 'class' ou 'media'
  theme: {
    extend: {
      colors: {
        // Defina suas cores personalizadas com base no design do Figma
        primary: '#0074D9',
        text: '#333333',
      },
      fontFamily: {
        // Defina suas fontes com base no design do Figma
        roboto: ['Roboto', 'sans'],
      },
      fontSize: {
        // Defina tamanhos de texto personalizados, se necessário
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

*/
