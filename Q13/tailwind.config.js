/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0f',
          900: '#0d0d14',
          850: '#111119',
          800: '#15151f',
          700: '#1c1c28',
          600: '#262633',
          500: '#3a3a4a',
          400: '#6b6b7e',
          300: '#9a9ab0',
          200: '#c8c8d6',
          100: '#e6e6ee',
        },
        accent: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb4ff',
          400: '#5a8cff',
          500: '#3b6bff',
          600: '#2a52e6',
          700: '#2342b8',
          800: '#1f3a94',
          900: '#1d347a',
        },
        violet: {
          400: '#9b8cff',
          500: '#7c6bff',
          600: '#6a55f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,107,255,0.18), 0 8px 40px -12px rgba(59,107,255,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -24px rgba(0,0,0,0.8)',
        'card-hover': '0 0 0 1px rgba(59,107,255,0.35), 0 24px 60px -20px rgba(59,107,255,0.25)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,107,255,0.18), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
