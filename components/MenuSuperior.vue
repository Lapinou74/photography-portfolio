<template>
  <header
    class="site-header sticky top-0 z-50 border-b border-nature-200 dark:border-gray-700 bg-nature-50 dark:bg-gray-900 py-6 font-extralight transition-colors duration-200"
    :class="{ 'site-header--transparent': isTransparent }"
    @keydown.esc="closeMobileMenu(true)"
  >
    <div class="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16 2xl:px-28">
      <div class="site-header__bar grid items-center gap-6">
        <nav class="site-header__nav hidden lg:flex items-center lg:space-x-5 xl:space-x-8 text-lg xl:text-xl font-light">
          <nuxt-link
            v-for="item in navPages"
            :key="item.path"
            :to="localePath(item.path)"
            class="block px-1 py-2 whitespace-nowrap text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
            >{{ $t(`nav.${item.key}`) }}</nuxt-link
          >
        </nav>

        <nuxt-link
          :to="localePath('/')"
          :aria-label="$t('nav.home')"
          @click.native="closeMobileMenu()"
          class="site-header__logo flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-nature-300 dark:border-gray-600 text-[0.6rem] uppercase tracking-[0.35em] text-nature-500 dark:text-nature-400 transition-colors duration-200"
        >
          Logo
        </nuxt-link>

        <div class="site-header__actions flex justify-self-end items-center lg:space-x-5">
          <nuxt-link
            :to="localePath('/contact')"
            class="site-header__contact hidden lg:block whitespace-nowrap text-lg xl:text-xl font-normal border border-forest-600 dark:border-forest-300 rounded-md text-forest-600 dark:text-forest-300 hover:bg-forest-600 hover:text-white dark:hover:bg-forest-300 dark:hover:text-gray-900 transition-colors duration-200"
            >{{ $t('nav.contact') }}</nuxt-link
          >

          <header-controls
            class="hidden lg:flex space-x-3"
            :is-dark-mode="isDarkMode"
            item-class="flex items-center px-1 py-2 text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
            @toggle-language="toggleLanguage"
            @toggle-theme="toggleDarkMode"
          />

          <button
            ref="menuButton"
            type="button"
            class="inline-flex lg:hidden items-center justify-center w-10 h-10 -mr-2 text-nature-700 dark:text-nature-200 transition-colors duration-200"
            aria-controls="mobile-menu"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            :aria-label="$t(mobileMenuOpen ? 'nav.closeMenu' : 'nav.openMenu')"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path v-if="mobileMenuOpen" d="M6 6l12 12M18 6L6 18" />
              <path v-else d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="mobileMenuOpen"
      id="mobile-menu"
      class="site-header__overlay fixed inset-0 flex flex-col overflow-y-auto bg-nature-50 dark:bg-gray-900 lg:hidden"
    >
      <nav class="flex flex-col items-center space-y-7 text-2xl font-light">
        <nuxt-link
          v-for="item in navPages"
          :key="item.path"
          :to="localePath(item.path)"
          class="text-nature-700 dark:text-nature-200 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
          @click.native="closeMobileMenu()"
          >{{ $t(`nav.${item.key}`) }}</nuxt-link
        >
        <nuxt-link
          :to="localePath('/contact')"
          class="text-nature-700 dark:text-nature-200 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
          @click.native="closeMobileMenu()"
          >{{ $t('nav.contact') }}</nuxt-link
        >
      </nav>

      <header-controls
        class="mt-auto pt-10 justify-center space-x-6"
        :is-dark-mode="isDarkMode"
        item-class="flex items-center p-2 text-nature-600 dark:text-nature-300 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
        @toggle-language="toggleLanguage"
        @toggle-theme="toggleDarkMode"
      />
    </div>
  </header>
</template>

<script>
const navPages = require('~/config/navigation');
import HeaderControls from '~/components/HeaderControls.vue';

const DESKTOP_MIN_WIDTH = 1024;

export default {
  components: { HeaderControls },
  data() {
    return {
      navPages,
      mobileMenuOpen: false,
      isDarkMode: false,
      isScrolled: false
    };
  },
  computed: {
    isTransparent() {
      const heroPages = ['index', 'contact', ...navPages.map(item => item.path.slice(1))];
      return heroPages.includes(this.getRouteBaseName()) && !this.isScrolled && !this.mobileMenuOpen;
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu();
    },
    mobileMenuOpen(open) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  },
  mounted() {
    // Initialize dark mode from localStorage or system preference
    this.initializeDarkMode();
    this.updateScroll();
    window.addEventListener('scroll', this.updateScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
    window.removeEventListener('resize', this.onResize);
    document.documentElement.style.overflow = '';
  },
  methods: {
    closeMobileMenu(restoreFocus = false) {
      if (!this.mobileMenuOpen) return;
      this.mobileMenuOpen = false;
      if (restoreFocus) {
        this.$refs.menuButton.focus();
      }
    },
    onResize() {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
        this.closeMobileMenu();
      }
    },
    updateScroll() {
      this.isScrolled = window.scrollY > 0;
    },
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

<style scoped>
.site-header__bar {
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
}

.site-header__logo {
  grid-column: 2;
}

.site-header__contact {
  padding: 5px 20px;
  border-radius: 5px;
}

/* Starts the menu content below the header bar, which stays on top */
.site-header__overlay {
  padding-top: calc(var(--site-header-height) + 2.5rem);
  padding-bottom: 2.5rem;
}

.site-header.site-header--transparent {
  background-color: transparent;
  border-color: transparent;
}

.site-header--transparent .site-header__nav a,
.site-header--transparent .site-header__logo,
.site-header--transparent .site-header__actions > button,
.site-header--transparent .site-header__actions ::v-deep .header-controls a,
.site-header--transparent .site-header__actions ::v-deep .header-controls button {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

.site-header--transparent .site-header__logo:hover,
.site-header--transparent .site-header__actions > button:hover,
.site-header--transparent .site-header__actions ::v-deep .header-controls a:hover,
.site-header--transparent .site-header__actions ::v-deep .header-controls button:hover {
  opacity: 0.8;
}

/* Light sage (forest-300) stays readable over the photo */
.site-header--transparent .site-header__nav a:hover {
  color: #8db594;
}

.site-header--transparent .site-header__contact {
  color: white;
  border-color: white;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

/* Same sage (forest-300) as the header title hover over the photo */
.site-header--transparent .site-header__contact:hover {
  background-color: #8db594;
  border-color: #8db594;
  color: #191b16;
  text-shadow: none;
}
</style>