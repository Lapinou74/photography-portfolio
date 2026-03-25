<template>
  <header
    x-data="{ mobileMenuOpen : false }"
    class="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white dark:bg-gray-900 py-6 px-6 relative font-extralight transition-colors duration-200"
  >
    <nuxt-link :to="localePath('/')" class="block">
      <span class="text-indigo-600 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-400 font-light text-2xl transition-colors duration-200"
        >sergio perea</span
      >
    </nuxt-link>
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      class="inline-block md:hidden w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-1 transition-colors duration-200"
    >
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <nav
      class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white dark:bg-gray-900 shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent dark:md:bg-transparent p-6 pt-0 md:p-0 transition-colors duration-200"
      :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      @click.away="mobileMenuOpen = false"
    >
      <nuxt-link
        :to="localePath('/')"
        class="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200"
        >{{ $t('nav.home') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/about-me')"
        class="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200"
        >{{ $t('nav.about') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/gallery')"
        class="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200"
        >{{ $t('nav.portfolio') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/contact')"
        class="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight transition-colors duration-200"
        >{{ $t('nav.contact') }}</nuxt-link
      >
      
      <!-- Language and Dark Mode Controls -->
      <div class="flex items-center space-x-3">
        <!-- Language Toggle -->
        <button
          @click="toggleLanguage"
          class="flex items-center py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight focus:outline-none transition-colors duration-200"
          :aria-label="$i18n.locale === 'fr' ? 'Switch to English' : 'Switch to French'"
        >
          <span class="text-lg">{{ $i18n.locale === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
        </button>
        
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          class="flex items-center py-1 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 font-extralight focus:outline-none transition-colors duration-200"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun Icon (show in dark mode) -->
          <svg
            v-if="isDarkMode"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="m12 2 0 2"></path>
            <path d="m12 20 0 2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="m2 12 2 0"></path>
            <path d="m20 12 2 0"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          
          <!-- Moon Icon (show in light mode) -->
          <svg
            v-else
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      isDarkMode: false
    };
  },
  mounted() {
    // Initialize dark mode from localStorage or system preference
    this.initializeDarkMode();
  },
  methods: {
    toggleLanguage() {
      // Switch between French and English
      const newLocale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
      this.$router.push(this.switchLocalePath(newLocale));
    },
    initializeDarkMode() {
      // Check localStorage first, then system preference
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        this.isDarkMode = JSON.parse(savedMode);
      } else {
        // Check system preference
        this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.applyDarkMode();
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
      this.applyDarkMode();
    },
    applyDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
};
</script>

<style scoped></style>
