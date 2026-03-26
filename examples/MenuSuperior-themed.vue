// Example: Updated MenuSuperior.vue using centralized theme configuration
// This shows how to migrate from hardcoded classes to theme utilities

<template>
  <header
    x-data="{ mobileMenuOpen : false }"
    :class="headerClasses"
  >
    <nuxt-link :to="localePath('/')" class="block">
      <span :class="brandClasses">sergio perea</span>
    </nuxt-link>
    
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      :class="mobileButtonClasses"
    >
      <!-- SVG content -->
    </button>
    
    <nav
      :class="navClasses"
      :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      @click.away="mobileMenuOpen = false"
    >
      <nuxt-link
        :to="localePath('/')"
        :class="navLinkClasses"
      >{{ $t('nav.home') }}</nuxt-link>
      
      <nuxt-link
        :to="localePath('/about-me')"
        :class="navLinkClasses"
      >{{ $t('nav.about') }}</nuxt-link>
      
      <nuxt-link
        :to="localePath('/gallery')"
        :class="navLinkClasses"
      >{{ $t('nav.portfolio') }}</nuxt-link>
      
      <nuxt-link
        :to="localePath('/contact')"
        :class="navLinkClasses"
      >{{ $t('nav.contact') }}</nuxt-link>
      
      <!-- Language and Dark Mode Controls -->
      <div class="flex items-center space-x-3">
        <!-- Language Toggle -->
        <button
          @click="toggleLanguage"
          :class="toggleButtonClasses"
          :aria-label="$i18n.locale === 'fr' ? 'Switch to English' : 'Switch to French'"
        >
          <span class="text-lg">{{ $i18n.locale === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
        </button>
        
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          :class="toggleButtonClasses"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- SVG Icons -->
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { useTheme } from '~/composables/useTheme'

export default {
  props: {
    posts: {
      type: Array
    }
  },
  setup() {
    const { themeClasses, colors } = useTheme()
    
    // Define component-specific classes using theme utilities
    const headerClasses = `flex flex-wrap flex-row justify-between md:items-center md:space-x-4 ${colors.bg.primary} py-6 px-6 relative font-extralight transition-colors duration-200`
    
    const brandClasses = themeClasses.brand
    
    const mobileButtonClasses = `inline-block md:hidden w-8 h-8 bg-gray-200 dark:bg-gray-700 ${colors.text.secondary} p-1 transition-colors duration-200`
    
    const navClasses = `absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto ${colors.bg.primary} shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent dark:md:bg-transparent p-6 pt-0 md:p-0 transition-colors duration-200`
    
    const navLinkClasses = themeClasses.nav + ' block py-1'
    
    const toggleButtonClasses = themeClasses.nav + ' flex items-center py-1 focus:outline-none'
    
    return {
      headerClasses,
      brandClasses,
      mobileButtonClasses,
      navClasses,
      navLinkClasses,
      toggleButtonClasses
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      isDarkMode: false
    };
  },
  mounted() {
    this.initializeDarkMode();
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
      this.$router.push(this.switchLocalePath(newLocale));
    },
    initializeDarkMode() {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        this.isDarkMode = JSON.parse(savedMode);
      } else {
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

<!-- 
Key Changes Made:
1. Imported useTheme composable
2. Replaced hardcoded classes with theme utilities
3. Used theme colors and typography classes
4. Maintained all functionality while centralizing styling
5. Classes are now computed from theme configuration
-->