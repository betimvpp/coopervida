/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin'; // Importa o plugin do Tailwind

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      width: {
        1440: '1440px',
      },
      height: {
        720: '720px',
      },
      maxHeight:{
        500: '500px'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        topBanner: "url('../components/assets/BackgroundDeco.png')",
        midRightBanner: "url('../components/assets/support.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          // Classe para aplicar a barra diagonal
          '.diagonal-bar': {
            position: 'relative',
            display: 'inline-block',
          },
          // Estilo do pseudo-elemento ::after para criar a barra diagonal
          '.diagonal-bar::after': {
            content: "''",
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100%',
            height: '100%',
            borderRight: '3px solid #1f2937', // Ajuste a espessura e cor da barra
            borderTop: '3px solid #1f2937',   // Ajuste a espessura e cor da barra
            transform: 'rotate(45deg)',      // Rotaciona para criar a diagonal
            transformOrigin: 'top right',
          },
        },
      );
    }),
  ],
};

export default config;
