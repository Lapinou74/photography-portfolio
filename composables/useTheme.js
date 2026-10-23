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
    brand: 'font-display text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 font-light text-2xl transition-colors duration-200',
    
    // Navigation classes
    nav: 'font-nav text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 font-extralight transition-colors duration-200',
    
    // Primary heading
    heading1: 'font-heading text-5xl font-bold text-nature-800 dark:text-nature-200',
    
    // Secondary heading
    heading2: 'font-heading text-4xl lg:text-5xl font-bold text-nature-900 dark:text-nature-100',
    
    // Tertiary heading
    heading3: 'font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-nature-900 dark:text-nature-100',
    
    // Gallery heading
    galleryTitle: 'font-heading text-base font-bold text-nature-600 dark:text-nature-400',
    
    // Body text primary
    bodyPrimary: 'font-body text-lg text-nature-600 dark:text-nature-300',
    
    // Body text secondary  
    bodySecondary: 'font-body text-xl text-nature-600 dark:text-nature-400',
    
    // Form label
    formLabel: 'font-body uppercase text-sm text-nature-600 dark:text-nature-400 font-bold',
    
    // Form input
    formInput: 'font-body w-full bg-nature-50 dark:bg-gray-900 text-nature-900 dark:text-nature-100 placeholder-nature-500 dark:placeholder-nature-400 border border-nature-300 dark:border-gray-600 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-colors duration-200',
    
    // Primary button
    buttonPrimary: 'font-body bg-forest-600 hover:bg-forest-700 text-white dark:bg-forest-300 dark:hover:bg-forest-200 dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200',
    
    // Gallery card
    galleryCard: 'font-body w-full bg-nature-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700 transition-all duration-200',
    
    // Gallery description
    galleryDescription: 'font-body text-xl text-nature-700 dark:text-nature-300 font-bold'
  }

  // Color utilities
  const colors = {
    text: {
      primary: 'text-nature-900 dark:text-nature-100',
      secondary: 'text-nature-600 dark:text-nature-300',
      tertiary: 'text-nature-500 dark:text-nature-400',
      accent: 'text-nature-600 dark:text-nature-400',
      muted: 'text-nature-500 dark:text-nature-400'
    },
    bg: {
      primary: 'bg-nature-50 dark:bg-gray-900',
      secondary: 'bg-nature-100 dark:bg-gray-800',
      accent: 'bg-forest-600 dark:bg-forest-300'
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
  brand: 'font-display text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 font-light text-2xl transition-colors duration-200',
  nav: 'font-nav text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 font-extralight transition-colors duration-200',
  h1: 'font-heading text-5xl font-bold text-nature-800 dark:text-nature-200',
  h2: 'font-heading text-4xl lg:text-5xl font-bold text-nature-900 dark:text-nature-100',
  h3: 'font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-nature-900 dark:text-nature-100',
  body1: 'font-body text-lg text-nature-600 dark:text-nature-300',
  body2: 'font-body text-xl text-nature-600 dark:text-nature-400'
}