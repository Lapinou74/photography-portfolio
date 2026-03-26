<template>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600 dark:text-indigo-400">
            {{ $t('pages.gallery.title') }}
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 dark:text-gray-100">
            {{ $t('pages.gallery.selectCategory') }}
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="gallery in galleries"  :key="gallery.slug" :gallery="gallery" class="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700 overflow-hidden flex flex-col justify-center items-center transition-all duration-200">
            <NuxtLink :to="getUrlBySlug(gallery.slug)">
            <div>
                <img class="object-center object-cover h-auto w-full" :src="gallery.header_image" :alt="$t('pages.gallery.photoAlt')">
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 dark:text-gray-300 font-bold mb-2">{{ gallery.title }}</p>
                <br>
            </div>
            </NuxtLink>
        </div>
    </div>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.gallery.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.gallery.selectCategory')
        }
      ]
    }
  },
  async asyncData({ $content, params, route, $config }) {
    const fetchDocsLabel = 'fetchAllPosts'
    const galleries = await $content('gallery')
      .without(['photos', ])
      .sortBy('order')
      .fetch()
    return { galleries }
  },
  data() {
    return {};
  },
  methods: {
      getUrlBySlug(slug) {
          return this.localePath("/gallery/" + slug)
      }
  }
};
</script>
