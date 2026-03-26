<template>
  <div class="bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Hero Section -->
    <section class="text-center py-16 px-6">
      <h1 class="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">{{ $t('pages.home.title') }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">{{ $t('pages.home.subtitle') }}</p>
      <photo-slide />
      <div class="mt-8">
        <nuxt-link
          :to="localePath('/gallery')"
          class="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {{ $t('pages.home.viewGallery') }}
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import PhotoSlide from '~/components/home/PhotoSlide.vue';
export default {
  components: { PhotoSlide },
  head() {
    return {
      title: this.$t('pages.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.description')
        }
      ]
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>