/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-red-50',
    'bg-blue-50',
    'bg-teal-50',
    'bg-yellow-50',
    'bg-orange-50',
    'bg-pink-50',
    'bg-brown-50',
    'bg-gray-50',
    'text-red-600',
    'text-blue-600',
    'text-teal-600',
    'text-yellow-600',
    'text-orange-600',
    'text-pink-600',
    'text-brown-600',
    'text-gray-600',
  ],
}