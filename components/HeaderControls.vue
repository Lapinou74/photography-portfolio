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
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 1.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.3-3.6a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
        />
      </svg>
    </a>

    <button
      type="button"
      :class="itemClass"
      :aria-label="themeLabel"
      :title="themeLabel"
      @click="$emit('toggle-theme')"
    >
      <svg v-if="isDarkMode" class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <path
          d="M12 1.5v2.5M12 20v2.5M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M1.5 12H4M20 12h2.5M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>

    <button
      type="button"
      :class="itemClass"
      :aria-label="languageLabel"
      :title="languageLabel"
      @click="$emit('toggle-language')"
    >
      <lang-flag :country="$i18n.locale === 'fr' ? 'gb' : 'fr'" />
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
