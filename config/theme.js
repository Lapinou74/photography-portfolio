// Theme Configuration for Photography Portfolio
// Centralized font and styling settings for light/dark mode

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
    // Text colors for light mode
    text: {
      primary: '#1f2937',     // gray-800
      secondary: '#4b5563',   // gray-600  
      tertiary: '#6b7280',    // gray-500
      accent: '#4f46e5',      // indigo-600
      muted: '#9ca3af',       // gray-400
    },
    
    // Text colors for dark mode
    'text-dark': {
      primary: '#f9fafb',     // gray-50
      secondary: '#d1d5db',   // gray-300
      tertiary: '#9ca3af',    // gray-400
      accent: '#818cf8',      // indigo-400
      muted: '#6b7280',       // gray-500
    }
  },

  // Typography Component Classes
  typography: {
    // Brand/Logo styles
    brand: {
      light: 'text-indigo-600 font-light text-2xl',
      dark: 'text-gray-300 font-light text-2xl'
    },

    // Navigation styles
    nav: {
      light: 'text-gray-600 hover:text-gray-400 font-extralight',
      dark: 'text-gray-300 hover:text-gray-400 font-extralight'
    },

    // Heading styles
    heading: {
      h1: {
        light: 'text-5xl font-bold text-gray-800',
        dark: 'text-5xl font-bold text-gray-200'
      },
      h2: {
        light: 'text-4xl lg:text-5xl font-bold text-gray-900',
        dark: 'text-4xl lg:text-5xl font-bold text-gray-100'
      },
      h3: {
        light: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900',
        dark: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100'
      }
    },

    // Body text styles  
    body: {
      primary: {
        light: 'text-lg text-gray-600',
        dark: 'text-lg text-gray-300'
      },
      secondary: {
        light: 'text-xl text-gray-600',
        dark: 'text-xl text-gray-400'
      }
    },

    // Form styles
    form: {
      label: {
        light: 'uppercase text-sm text-gray-600 font-bold',
        dark: 'uppercase text-sm text-gray-400 font-bold'
      },
      input: {
        light: 'w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline',
        dark: 'w-full bg-gray-700 text-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      }
    },

    // Button styles
    button: {
      primary: {
        light: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold',
        dark: 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'
      }
    },

    // Gallery styles
    gallery: {
      title: {
        light: 'text-base font-bold text-indigo-600',
        dark: 'text-base font-bold text-indigo-400'
      },
      description: {
        light: 'text-xl text-gray-700 font-bold',
        dark: 'text-xl text-gray-300 font-bold'
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