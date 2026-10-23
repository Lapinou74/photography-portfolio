<template>
  <footer class="flex-shrink-0 bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="bg-nature-100 dark:bg-gray-800 px-6 py-12 md:py-16 text-center text-nature-700 dark:text-nature-200 transition-colors duration-200">
      <nuxt-link
        :to="localePath('/')"
        :aria-label="$t('nav.home')"
        class="inline-flex items-center justify-center w-16 h-16 border border-nature-300 dark:border-gray-600 text-[0.6rem] uppercase tracking-[0.35em] text-nature-500 dark:text-nature-400 transition-colors duration-200"
      >
        Logo
      </nuxt-link>

      <p class="mt-6 text-lg md:text-xl">
        {{ $t('footer.tagline') }}
      </p>
      <p class="mt-4 mx-auto max-w-2xl text-base md:text-lg font-light">
        {{ $t('footer.about') }}
      </p>

      <ul class="site-footer__list mt-6 flex flex-wrap justify-center gap-y-2 text-sm md:text-base">
        <li v-for="item in navPages" :key="item.path">
          <nuxt-link :to="localePath(item.path)" class="hover:text-nature-900 dark:hover:text-white transition-colors duration-200">
            {{ $t(`nav.${item.key}`) }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/contact')" class="hover:text-nature-900 dark:hover:text-white transition-colors duration-200">
            {{ $t('nav.contact') }}
          </nuxt-link>
        </li>
      </ul>

      <div class="mt-6 flex justify-center">
        <a
          :href="links.social.instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="p-1 text-nature-600 dark:text-nature-300 hover:text-nature-900 dark:hover:text-white transition-colors duration-200"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>

    <ul class="site-footer__list px-6 py-6 flex flex-wrap justify-center gap-y-2 text-sm md:text-base text-nature-600 dark:text-nature-300">
      <li>
        <nuxt-link :to="localePath('/mentions-legales')" class="hover:text-nature-900 dark:hover:text-white transition-colors duration-200">
          {{ $t('footer.legal') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/confidentialite')" class="hover:text-nature-900 dark:hover:text-white transition-colors duration-200">
          {{ $t('footer.privacy') }}
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
const links = require('~/config/links');
const navPages = require('~/config/navigation');

export default {
  name: 'SiteFooter',
  data() {
    return { links, navPages };
  }
};
</script>

<style scoped>
.site-footer__list li + li::before {
  content: '-';
  content: '-' / '';
  margin: 0 0.6rem;
}
</style>
