// Theme Configuration for Photography Portfolio
// Centralized font and styling settings for light/dark mode

// Autumn palette (warm cream, ochre, rust and deep brown). The Tailwind key
// stays `nature` so every `*-nature-*` class picks up these colors.
const nature = {
  50: '#fbf6ef',
  100: '#f5e9da',
  200: '#ead3b9',
  300: '#ddb48c',
  400: '#c98e5c',
  500: '#9a5229',
  600: '#843f1f',
  700: '#6a3219',
  800: '#4f2615',
  900: '#2c170d'
}

// Neutral dark grays (no blue tint) used for dark-mode surfaces and borders
const gray = require('tailwindcss/colors').trueGray

module.exports = {
  // Font Family Configuration
  fontFamily: {
    'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
    'body': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
    'heading': ['Poppins', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
    'nav': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
  },

  // Font Weight Configuration
  fontWeight: {
    'thin': '100',
    'extralight': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900'
  },

  // Font Size Configuration
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem' }],
    'base': ['1rem', { lineHeight: '1.5rem' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },

  // Typography Color Schemes
  colors: {
    nature,
    gray,
    // Text colors for light mode
    text: {
      primary: nature[900],
      secondary: nature[600],
      tertiary: nature[500],
      accent: nature[600],
      muted: nature[500],
    },
    
    // Text colors for dark mode
    'text-dark': {
      primary: nature[50],
      secondary: nature[300],
      tertiary: nature[400],
      accent: nature[300],
      muted: nature[400],
    }
  },

  // Typography Component Classes
  typography: {
    // Brand/Logo styles
    brand: {
      light: 'text-nature-600 font-light text-2xl',
      dark: 'text-nature-300 font-light text-2xl'
    },

    // Navigation styles
    nav: {
      light: 'text-nature-600 hover:text-nature-900 font-extralight',
      dark: 'text-nature-300 hover:text-nature-200 font-extralight'
    },

    // Heading styles
    heading: {
      h1: {
        light: 'text-5xl font-bold text-nature-800',
        dark: 'text-5xl font-bold text-nature-200'
      },
      h2: {
        light: 'text-4xl lg:text-5xl font-bold text-nature-900',
        dark: 'text-4xl lg:text-5xl font-bold text-nature-100'
      },
      h3: {
        light: 'text-3xl md:text-4xl lg:text-5xl font-bold text-nature-900',
        dark: 'text-3xl md:text-4xl lg:text-5xl font-bold text-nature-100'
      }
    },

    // Body text styles  
    body: {
      primary: {
        light: 'text-lg text-nature-600',
        dark: 'text-lg text-nature-300'
      },
      secondary: {
        light: 'text-xl text-nature-600',
        dark: 'text-xl text-nature-400'
      }
    },

    // Form styles
    form: {
      label: {
        light: 'uppercase text-sm text-nature-600 font-bold',
        dark: 'uppercase text-sm text-nature-300 font-bold'
      },
      input: {
        light: 'w-full bg-nature-50 text-nature-900 placeholder-nature-500 border border-nature-300 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-500',
        dark: 'w-full bg-gray-900 text-nature-100 placeholder-nature-400 border border-gray-600 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-500'
      }
    },

    // Button styles
    button: {
      primary: {
        light: 'bg-nature-600 hover:bg-nature-700 text-white font-semibold',
        dark: 'bg-nature-500 hover:bg-nature-600 text-white font-semibold'
      }
    },

    // Gallery styles
    gallery: {
      title: {
        light: 'text-base font-bold text-nature-600',
        dark: 'text-base font-bold text-nature-400'
      },
      description: {
        light: 'text-xl text-nature-700 font-bold',
        dark: 'text-xl text-nature-300 font-bold'
      }
    }
  },

  // Transition settings
  transitions: {
    default: 'transition-colors duration-200',
    fast: 'transition-colors duration-150',
    slow: 'transition-colors duration-300'
  }
}