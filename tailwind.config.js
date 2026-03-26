const themeConfig = require('./config/theme')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      // Import centralized font configuration
      fontFamily: themeConfig.fontFamily,
      fontSize: themeConfig.fontSize,
      fontWeight: themeConfig.fontWeight,
      
      // Add custom colors from theme config
      colors: {
        ...themeConfig.colors
      },

      // Custom typography utilities
      typography: themeConfig.typography
    }
  },
  plugins: []
}