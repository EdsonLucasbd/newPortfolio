import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '100': '#1E2D3D',
          '200': '#011627',
          '300': '#011221',
          '400': '#01080E'
        },
        secondary: {
          '100': '#FFFFFF',
          '200': '#E5E9F0',
          '300': '#607B96',
          '400': '#3C9D93',
          '500': '#4D5BCE'
        },
        accent: {
          '100': '#FEA55F',
          '200': '#43D9AD',
          '300': '#E99287',
          '400': '#C98BDF'
        },
      },
      animation: {
        "fade-in-bottom-soft": "fade-in-bottom-soft 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)    both"
      },
      keyframes: {
        "fade-in-bottom-soft": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
          }
        }
      },
      gridTemplateColumns: {
        editor: '3.5rem 10.55rem 1fr',
        projects: '3.5rem 1fr'
        
      },
    },
  },
  plugins: [],
}
export default config
