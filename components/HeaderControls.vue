<template>
  <div class="header-controls flex items-center">
    <a
      :href="links.social.instagram"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      title="Instagram"
      :class="itemClass"
    >
      <svg
        class="w-5 h-5"
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

    <button
      type="button"
      :class="itemClass"
      :aria-label="languageLabel"
      :title="languageLabel"
      @click="$emit('toggle-language')"
    >
      <lang-flag :country="$i18n.locale === 'fr' ? 'gb' : 'fr'" />
    </button>

    <button
      type="button"
      :class="itemClass"
      :aria-label="themeLabel"
      :title="themeLabel"
      @click="$emit('toggle-theme')"
    >
      <svg
        v-if="isDarkMode"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
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
      <svg
        v-else
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
const links = require('~/config/links');
import LangFlag from '~/components/LangFlag.vue';

export default {
  name: 'HeaderControls',
  components: { LangFlag },
  props: {
    isDarkMode: { type: Boolean, default: false },
    itemClass: { type: String, default: '' }
  },
  data() {
    return { links };
  },
  computed: {
    languageLabel() {
      return this.$i18n.locale === 'fr' ? 'Switch to English' : 'Switch to French';
    },
    themeLabel() {
      return this.$t(this.isDarkMode ? 'nav.lightMode' : 'nav.darkMode');
    }
  }
};
</script>
