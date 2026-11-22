import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { dark: '#02040a', accent: '#22c55e', sky: '#38bdf8' },
        lime: { 300: 'rgb(var(--lime-300) / <alpha-value>)', 400: 'rgb(var(--lime-400) / <alpha-value>)', 500: 'rgb(var(--lime-500) / <alpha-value>)' },
        'surface-0': 'rgb(var(--s0) / <alpha-value>)',
        'surface-1': 'rgb(var(--s1) / <alpha-value>)',
        'surface-2': 'rgb(var(--s2) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        game: ['var(--font-game)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
        pixel: ['var(--font-pixel)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
