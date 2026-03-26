// Vue.js Theme Utility
// Easy access to centralized theme configuration for components

export const useTheme = () => {
  // Theme configuration import
  const theme = require('~/config/theme')

  // Helper function to get typography classes based on current mode
  const getTypographyClass = (type, variant = null, isDarkMode = false) => {
    try {
      let config = theme.typography[type]
      
      if (variant && config[variant]) {
        config = config[variant]
      }
      
      if (typeof config === 'object' && config.light && config.dark) {
        return isDarkMode ? config.dark : config.light
      }
      
      return config || ''
    } catch (error) {
      console.warn(`Theme configuration not found for: ${type}${variant ? `.${variant}` : ''}`)
      return ''
    }
  }

  // Helper function to build responsive typography classes
  const buildResponsiveClass = (baseClass, breakpoints = {}) => {
    let classes = baseClass
    
    Object.keys(breakpoints).forEach(bp => {
      classes += ` ${bp}:${breakpoints[bp]}`
    })
    
    return classes
  }

  // Pre-built class combinations for common UI elements
  const themeClasses = {
    // Brand/Logo classes
    brand: 'font-display text-indigo-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-light text-2xl transition-colors duration-200',
    
    // Navigation classes
    nav: 'font-nav text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200',
    
    // Primary heading
    heading1: 'font-heading text-5xl font-bold text-gray-800 dark:text-gray-200',
    
    // Secondary heading
    heading2: 'font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100',
    
    // Tertiary heading
    heading3: 'font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100',
    
    // Gallery heading
    galleryTitle: 'font-heading text-base font-bold text-indigo-600 dark:text-indigo-400',
    
    // Body text primary
    bodyPrimary: 'font-body text-lg text-gray-600 dark:text-gray-300',
    
    // Body text secondary  
    bodySecondary: 'font-body text-xl text-gray-600 dark:text-gray-400',
    
    // Form label
    formLabel: 'font-body uppercase text-sm text-gray-600 dark:text-gray-400 font-bold',
    
    // Form input
    formInput: 'font-body w-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:focus:ring-2 dark:focus:ring-blue-500 transition-colors duration-200',
    
    // Primary button
    buttonPrimary: 'font-body bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200',
    
    // Gallery card
    galleryCard: 'font-body w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700 transition-all duration-200',
    
    // Gallery description
    galleryDescription: 'font-body text-xl text-gray-700 dark:text-gray-300 font-bold'
  }

  // Color utilities
  const colors = {
    text: {
      primary: 'text-gray-900 dark:text-gray-100',
      secondary: 'text-gray-600 dark:text-gray-300', 
      tertiary: 'text-gray-500 dark:text-gray-400',
      accent: 'text-indigo-600 dark:text-indigo-400',
      muted: 'text-gray-400 dark:text-gray-500'
    },
    bg: {
      primary: 'bg-white dark:bg-gray-900',
      secondary: 'bg-gray-100 dark:bg-gray-800',
      accent: 'bg-indigo-600 dark:bg-indigo-500'
    }
  }

  return {
    theme,
    getTypographyClass,
    buildResponsiveClass,
    themeClasses,
    colors
  }
}

// Export theme configuration for direct access
export const themeConfig = require('~/config/theme')

// Export commonly used class combinations
export const typography = {
  brand: 'font-display text-indigo-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-light text-2xl transition-colors duration-200',
  nav: 'font-nav text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200',
  h1: 'font-heading text-5xl font-bold text-gray-800 dark:text-gray-200',
  h2: 'font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100',
  h3: 'font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100',
  body1: 'font-body text-lg text-gray-600 dark:text-gray-300',
  body2: 'font-body text-xl text-gray-600 dark:text-gray-400'
}