/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1E3A8A',
        'blue-800': '#1D4ED8',
        'blue-700': '#2563EB',
        'yellow-100': '#FDE68A',
        'yellow-900': '#FBBF24',
        'green-100': '#D1FAE5',
        'green-900': '#10B981',
        'red-100': '#FECACA',
        'red-900': '#F87171',
        'pastelPurple': '#E1D5E7',
        'pastelPink': '#F9E2E4',
        'pastelBlue': '#DCEBF6',
        'pastelGreen': '#C5E8B5',
        'pastelYellow': '#F7E7A1',
      },
      animation: {
        'bg-floating': 'floating 6s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
