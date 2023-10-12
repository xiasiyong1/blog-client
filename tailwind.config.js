/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      xs: ['10px', { lineHeight: '18px' }],
      DEFAULT: ['12px', { lineHeight: '20px' }],
      m: ['14px', { lineHeight: '22px' }],
      l: ['16px', { lineHeight: '24px' }],
      xl: ['18px', { lineHeight: '26px' }]
    },
    spacing: {
      auto: 'auto',
      0: 0,
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      xs: '5px',
      s: '10px',
      m: '15px',
      l: '20px',
      xl: '25px'
    },
    colors: ({ colors }) => {
      return {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        primary: '#0064ff',
        success: '#00a865',
        error: '#eb3723',
        warning: '#f59300',
        DEFAULT: '#2d2d2e',
        weak: '#575859',
        weakest: '#a7a8ab'
      }
    },
    textColor: {
      primary: '#0064ff',
      success: '#00a865',
      error: '#eb3723',
      warning: '#f59300',
      DEFAULT: '#2d2d2e',
      weak: '#575859',
      weakest: '#a7a8ab'
    },
    borderColor: {
      DEFAULT: '#bebfc2'
    },
    fontWeight: {
      DEFAULT: 400,
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  plugins: []
}
