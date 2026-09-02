import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1D',
        panel: '#101A33',
        panel2: '#141F3D',
        paper: '#F5F7FA',
        paperDim: '#EBEFF5',
        line: 'rgba(255,255,255,0.08)',
        lineDark: 'rgba(10,15,29,0.10)',
        signal: '#1FE0A8',
        signal2: '#6C7CF7',
        muted: '#8B95AC',
        mutedDark: '#5B6478',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(10,15,29,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,29,0.05) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config
