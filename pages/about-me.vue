<template>
  <div>
    <article class="text-lg px-6 py-6 text-gray-600 mx-auto max-w-2xl">
      <h2 class="text-xl font-semibold">{{ $t('pages.about.title') }}</h2>
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
