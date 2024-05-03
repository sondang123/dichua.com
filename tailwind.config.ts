import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        success: {
          DEFAULT: '#28a745',
        },
        error: {
          DEFAULT: '#dc3545',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          1: '#FFBC99',
          2: '#CABDFF',
          3: '#B1E5FC',
          4: '#B5E4CA',
          5: '#FFD88D',
          6: '#FDDDE1',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        yellow: '#FCB121',
        shapes: { 1: '#F8FAFF', 2: '#E0E6F6', 3: '#BBBDC1' },
        main: {
          primary: '#2A85FF',
          1: '#F4F5F9',
        },
        neutral: {
          2: '#F4F4F6',
          4: '#D3D5DA',
          5: '#9EA3AE',
          6: '#6C727F',
          7: '#4D5461',
          8: '#212936',
          9: '#14151A',
        },
        sematic: {
          1: '#003B77',
          2: '#FF6A55',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      aspectRatio: {
        '16/9': '16/9',
        '4/3': '4/3',
        '21/9': '21/9',
        '1/1': '1/1',
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '48px': '48px',
        '52px': '52px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '68px': '68px',
        '72px': '72px',
        '76px': '76px',
        '80px': '80px',
        '84px': '84px',
        '88px': '88px',
      },

      // boxShadow: {
      //   xs: '0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)',
      //   sm: '0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);',
      //   md: '0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);',
      //   lg: '0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);',
      // },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        '.typo-s64-w400': {
          fontSize: '64px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          textAlign: 'left',
          letterSpacing: '-6px',
          '@media (max-width:768px )': {
            fontSize: '32px',
            letterSpacing: '-2px',
          },
        },
        '.typo-s48-w400': {
          fontSize: '48px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '24px',
          },
        },
        '.typo-s32-w400': {
          fontSize: '32px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '20px',
          },
        },
        '.typo-s24-w700': {
          fontSize: '24px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '20px',
          },
        },
        '.typo-s24-w500': {
          fontSize: '24px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          textAlign: 'left',
          '@media (max-width:768px )': {
            fontSize: '20px',
          },
        },
        '.typo-s24-w400': {
          fontSize: '24px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          textAlign: 'left',
          '@media (max-width:768px )': {
            fontSize: '20px',
          },
        },
        '.typo-s20-w700': {
          fontSize: '20px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '16px',
          },
        },
        '.typo-s20-w600': {
          fontSize: '20px',
          fontWeight: '600',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          textAlign: 'left',
          '@media (max-width:768px )': {
            fontSize: '16px',
          },
        },
        '.typo-s20-w400': {
          fontSize: '20px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          textAlign: 'left',
          '@media (max-width:768px )': {
            fontSize: '16px',
          },
        },
        '.typo-s18-w700': {
          fontSize: '18px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          color: theme('colors.neutral-4'),
        },
        '.typo-s18-w600': {
          fontSize: '18px',
          fontWeight: '600',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          color: theme('colors.neutral-4'),
          '@media (max-width:768px )': {
            fontSize: '14px',
          },
        },
        '.typo-s18-w500': {
          fontSize: '18px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          color: theme('colors.neutral-4'),
          '@media (max-width:768px )': {
            fontSize: '14px',
          },
        },
        '.typo-s18-w400': {
          fontSize: '18px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          color: theme('colors.neutral-7'),
        },
        '.typo-s16-w500': {
          fontSize: '16px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '14px',
          },
        },
        '.typo-s16-w700': {
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '14px',
          },
        },
        '.typo-s16-w400': {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '14px',
          },
        },
        '.typo-s14-w700': {
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
          '@media (max-width:768px )': {
            fontSize: '12px',
          },
        },
        '.typo-s14-w500': {
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
        },
        '.typo-s14-w400': {
          fontSize: '14px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
        },
        '.typo-s12-w700': {
          fontSize: '12px',
          fontWeight: '700',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
        },
        '.typo-s12-w500': {
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
        },
        '.typo-s12-w400': {
          fontSize: '12px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plus-jakarta-sans'),
        },
      })
    }),
  ],
} satisfies Config

export default config
