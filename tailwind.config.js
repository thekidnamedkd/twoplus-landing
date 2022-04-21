module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      normal: 400,
      bold: 600,
      italic: 800,
    },
    fontFamily: {
      reg: ['CartographCF'],
      hev: ['CartographCF-ExtraBold'],
      fan: ['CartographCF-HeavyItalic'],
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        tpBlack: {
          base: '#09191C',
        },
        tpCream: {
          base: '#FFFDF5',
        },
        tpNeon: {
          base: '#E6EB00',
        },
        tpBerry: {
          base: '#ED2677',
        },
        tpSky: {
          base: '#BEE5ED',
        },
        tpKhaki: {
          base: '#B5B800',
        },
      },
      backgroundImage: {
        'top-img': "url('~/public/assets/images/site_top_opti.png')",
        'bottom-img': "url('~/public/assets/images/site_bottom_opti.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
