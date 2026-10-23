// Theme Configuration for Photography Portfolio
// Centralized font and styling settings for light/dark mode

// Neutral base (warm off-white to charcoal with a slight green undertone) for
// surfaces, borders and text. The Tailwind key stays `nature` so existing
// `*-nature-*` classes keep working.
const nature = {
  50: '#faf9f6',
  100: '#f0eee9',
  200: '#e1ded7',
  300: '#c8c4bb',
  400: '#a29e95',
  500: '#6b6962',
  600: '#4a4b44',
  700: '#373832',
  800: '#262822',
  900: '#191b16'
}

// Forest-green accent, used sparingly: buttons, Contact button, link hovers,
// focus rings and small labels.
const forest = {
  50: '#eef4ef',
  100: '#d7e5d9',
  200: '#b0cbb4',
  300: '#8db594',
  400: '#5e8c67',
  500: '#3f8653',
  600: '#2f7a43',
  700: '#246236',
  800: '#1a3020',
  900: '#102016'
}
// Dark-mode surfaces and borders: neutral dark grays, lighter than pure black
// (the `gray` key is kept so every `dark:*-gray-*` class picks it up).
// 900 = page, 800 = panels/cards, 700 = separators, 600 = input/logo borders.
const gray = {
  50: '#f7f7f7',
  100: '#ededed',
  200: '#d9d9d9',
  300: '#c4c4c4',
  400: '#a3a3a3',
  500: '#8c8c8c',
  600: '#7a7a7a',
  700: '#3a3a3a',
  800: '#2b2b2b',
  900: '#1f1f1f'
}

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
    forest,
    gray,
    // Text colors for light mode
    text: {
      primary: nature[900],
      secondary: nature[600],
      tertiary: nature[500],
      accent: forest[600],
      muted: nature[500],
    },
    
    // Text colors for dark mode
    'text-dark': {
      primary: nature[50],
      secondary: nature[300],
      tertiary: nature[400],
      accent: forest[300],
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
      light: 'text-nature-600 hover:text-forest-600 font-extralight',
      dark: 'text-nature-300 hover:text-forest-300 font-extralight'
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
        light: 'w-full bg-nature-50 text-nature-900 placeholder-nature-500 border border-nature-300 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500',
        dark: 'w-full bg-gray-900 text-nature-100 placeholder-nature-400 border border-gray-600 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500'
      }
    },

    // Button styles
    button: {
      primary: {
        light: 'bg-forest-600 hover:bg-forest-700 text-white font-semibold',
        dark: 'bg-forest-300 hover:bg-forest-200 text-gray-900 font-semibold'
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