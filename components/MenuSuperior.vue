<template>
  <header
    x-data="{ mobileMenuOpen : false }"
    class="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative font-extralight"
  >
    <nuxt-link :to="localePath('/')" class="block">
      <span class="ext-indigo-600 hover:text-gray-400 font-light text-2xl "
        >sergio perea</span
      >
    </nuxt-link>
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
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
      class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
      :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      @click.away="mobileMenuOpen = false"
    >
      <nuxt-link
        :to="localePath('/')"
        class="block py-1 text-gray-600 hover:text-gray-400 font-extralight"
        >{{ $t('nav.home') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/about-me')"
        class="block py-1 text-gray-600 hover:text-gray-400 font-extralight"
        >{{ $t('nav.about') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/gallery')"
        class="block py-1 text-gray-600 hover:text-gray-400 font-extralight"
        >{{ $t('nav.portfolio') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/contact')"
        class="block py-1 text-gray-600 hover:text-gray-400 font-extralight"
        >{{ $t('nav.contact') }}</nuxt-link
      >
      <!-- Language Switcher -->
      <div class="relative" x-data="{ languageDropdown : false }">
        <button
          @click="languageDropdown = !languageDropdown"
          class="flex items-center py-1 text-gray-600 hover:text-gray-400 font-extralight focus:outline-none"
        >
          {{ $i18n.locale === 'fr' ? 'FR' : 'EN' }}
          <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          x-show="languageDropdown"
          @click.away="languageDropdown = false"
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-75"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-95"
          class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-30 min-w-[80px]"
        >
          <nuxt-link
            :to="switchLocalePath('fr')"
            class="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            @click="languageDropdown = false"
          >
            FR
          </nuxt-link>
          <nuxt-link
            :to="switchLocalePath('en')"
            class="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            @click="languageDropdown = false"
          >
            EN
          </nuxt-link>
        </div>
      </div>
      >
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
      mobileMenuOpen: false
    };
  }
};
</script>

<style scoped></style>
