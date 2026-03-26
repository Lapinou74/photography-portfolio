<template>
  <div class="bg-white dark:bg-gray-900 transition-colors duration-200">
    <article class="text-lg px-6 py-6 text-gray-600 dark:text-gray-300 mx-auto max-w-2xl">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ $t('pages.about.title') }}</h2>
      <p class="mt-6">
        {{ $t('pages.about.content') }}
      </p>
      <p class="mt-6">
        {{ $t('pages.about.content2') }}
      </p>
    </article>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: this.$t('pages.about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.about.content')
        }
      ]
    }
  }
}
</script>
