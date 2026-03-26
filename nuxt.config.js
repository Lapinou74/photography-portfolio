export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sergioperea-photo-portfolio-2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Google Fonts for centralized theme
      { 
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com' 
      },
      { 
        rel: 'preconnect', 
        href: 'https://fonts.gstatic.com', 
        crossorigin: true 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  cloudinary_api_key: process.env.api_key,
  cloudinary_api_secret: process.env.api_secret,
  cloudinary_cloud_name: process.env.cloud_name,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-gallery.client.js',
    { src: '~/plugins/lingallery.client.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // i18n module configuration
  i18n: {
    locales: [
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.js'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js'
      }
    ],
    defaultLocale: 'fr',
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Development server configuration
  server: {
    port: 3000,
    host: 'localhost'
  },

  // Watch configuration for hot reload
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  // Development configuration
  dev: process.env.NODE_ENV !== 'production',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Hot reload configuration
    hotMiddleware: {
      client: {
        overlay: true,
        reload: true
      }
    },
    
    // Extract CSS for better hot reload
    extractCSS: false,
    
    // Enable source maps for development
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
